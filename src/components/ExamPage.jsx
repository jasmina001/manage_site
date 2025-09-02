// src/components/ExamPage.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStars } from "../StarContext";
import "./ExamPage.css";

const QUESTIONS = [
  { id: 1, part: 1, number: 1, text: "What is the capital of France?", answer: "paris" },
  { id: 2, part: 1, number: 2, text: "Say your first name.", answer: "" }, // free text
  { id: 3, part: 1, number: 3, text: "What is 2 plus 2?", answer: "4" },
];

const TIME_PER_QUESTION = 15; // 15 soniya

const ExamPage = () => {
  const navigate = useNavigate();
  const { addStar } = useStars();
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [results, setResults] = useState([]);
  const [finished, setFinished] = useState(false);
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);
  const firstTtsDoneRef = useRef(false);

  // SpeechRecognition init
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recog = new SpeechRecognition();
    recog.lang = "en-US";
    recog.interimResults = false;
    recog.continuous = false;
    recognitionRef.current = recog;

    recog.onresult = (e) => {
      const text = Array.from(e.results).map(r => r[0].transcript).join(" ").trim();
      setTranscript(text);
      evaluateAnswer(text);
      setListening(false);
    };

    recog.onerror = () => setListening(false);
    recog.onend = () => setListening(false);
  }, []);

  // Timer for each question
  useEffect(() => {
    if (finished || !QUESTIONS[index]) return;

    setTimeLeft(TIME_PER_QUESTION);

    if (!firstTtsDoneRef.current && index === 0) {
      firstTtsDoneRef.current = true;
      speakText(QUESTIONS[0].text);
    }

    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setTimeLeft(t => t - 1), 1000);

    return () => clearInterval(timerRef.current);
  }, [index, finished]);

  // Auto evaluate when time is up
  useEffect(() => {
    if (timeLeft <= 0 && !finished && QUESTIONS[index]) evaluateAnswer("");
  }, [timeLeft, finished, index]);

  // Evaluate answer
  const evaluateAnswer = (userText) => {
    if (finished || !QUESTIONS[index]) return;

    const q = QUESTIONS[index];
    const normalizedUser = (userText || "").toString().trim().toLowerCase();
    const correctAnswer = (q.answer || "").toString().trim().toLowerCase();
    const isCorrect = correctAnswer === "" ? normalizedUser.length > 0 : normalizedUser.includes(correctAnswer) && correctAnswer.length > 0;

    setResults(prev => [...prev, { questionId: q.id, correct: isCorrect, answer: normalizedUser }]);
    if (isCorrect) addStar();

    setTimeout(() => {
      if (index + 1 < QUESTIONS.length) {
        setIndex(i => i + 1);
        setTranscript("");
        setTimeLeft(TIME_PER_QUESTION);
      } else {
        clearInterval(timerRef.current);
        setFinished(true);
      }
    }, 900);
  };

  const startListening = () => {
    const recog = recognitionRef.current;
    if (!recog) { alert("Your browser does not support speech recognition."); return; }
    setTranscript("");
    setListening(true);
    try { recog.start(); } catch { setListening(false); }
  };

  const speakText = (text) => {
    if (!("speechSynthesis" in window)) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  if (finished) {
    const trueCount = results.filter(r => r.correct).length;
    const falseCount = results.filter(r => !r.correct).length;
    const storedStars = Number(localStorage.getItem("stars") || 0);

    return (
      <div className="exam-root">
        <div className="exam-card result-card">
          <h2 className="exam-title">Exam finished 🎉</h2>

          <div className="result-row">
            <div className="result-block">
              <div className="result-number">{trueCount}</div>
              <div className="result-label">True answers</div>
            </div>
            <div className="result-block">
              <div className="result-number">{falseCount}</div>
              <div className="result-label">False answers</div>
            </div>
            <div className="result-block">
              <div className="result-number">{storedStars}</div>
              <div className="result-label">Stars</div>
            </div>
          </div>

          <div className="results-list">
            {results.map((r, i) => {
              const q = QUESTIONS.find(q => q.id === r.questionId);
              return (
                <div key={i} className="results-item">
                  <div className="q-text">{q?.text}</div>
                  <div className={`q-user ${r.correct ? "ok" : "bad"}`}>
                    {r.answer || <i>no answer</i>}
                  </div>
                </div>
              );
            })}
          </div>

          <button className="btn primary mt-6" onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const q = QUESTIONS[index];

  return (
    <div className="exam-root">
      <div className="exam-card">
        <div className="exam-header">
          <div className="part">Part {q?.part}</div>
          <div className="progress">Question {index + 1} / {QUESTIONS.length}</div>
          <div className="timer">⏳ {timeLeft}s</div>
        </div>

        <div className="question-area">
          <div className="question-text">{q?.text}</div>
        </div>

        <div className="transcript-area">
          <div className="transcript-label">Your answer</div>
          <div className="transcript-box">
            {transcript || <span className="muted">Speak using the mic below...</span>}
          </div>
        </div>
        <div className="controls">
          <button
            className={`mic-btn ${listening ? "listening" : ""}`}
            onClick={startListening}
            aria-label="Start recording"
          >
            🎙
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
