// src/pages/ExamPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    id: 2,
    question: "2 + 2 * 2 = ?",
    options: ["6", "8", "4", "10"],
    correct: "6",
  },
  {
    id: 3,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    correct: "Mars",
  },
];

const ExamPage = () => {
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);
  const [finished, setFinished] = useState(false);

  const navigate = useNavigate();

  const currentQuestion = questions[current];

  // AI ovozi faqat birinchi savolda
  useEffect(() => {
    if (current === 0) {
      const utter = new SpeechSynthesisUtterance(currentQuestion.question);
      window.speechSynthesis.speak(utter);
    }
  }, [current]);

  // 30 soniya taymer
  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Copy va boshqa tabga o'tishni bloklash
  useEffect(() => {
    const handleCopy = (e) => e.preventDefault();
    const handleBlur = () => {
      alert("You cannot switch tabs during the exam!");
      navigate("/"); // back to home
    };
    document.addEventListener("copy", handleCopy);
    window.addEventListener("blur", handleBlur);

    return () => {
      document.removeEventListener("copy", handleCopy);
      window.removeEventListener("blur", handleBlur);
    };
  }, [navigate]);

  const handleAnswer = (option) => {
    if (option === currentQuestion.correct) {
      setScore(score + 1);
      setStars(stars + 1);
    }
    handleNext();
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setTimeLeft(30);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full text-center">
        {!finished ? (
          <>
            {/* Savol */}
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              {currentQuestion.question}
            </h2>

            {/* Options */}
            <div className="grid grid-cols-2 gap-3">
              {currentQuestion.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt)}
                  className="bg-green-100 hover:bg-green-200 text-green-700 font-semibold py-2 rounded-xl shadow"
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Taymer */}
            <div className="mt-6 text-lg font-bold text-orange-700">
              Time Left: {timeLeft}s
            </div>

            {/* Yulduzlar */}
            <div className="mt-4 flex justify-center gap-1">
              {Array.from({ length: stars }).map((_, i) => (
                <span key={i} className="text-yellow-500 text-2xl">★</span>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-orange-700">Exam Finished 🎉</h2>
            <p className="mt-4 text-lg">
              You got <span className="font-bold">{score}</span> correct answers.
            </p>
            <div className="mt-4 flex justify-center gap-1">
              {Array.from({ length: stars }).map((_, i) => (
                <span key={i} className="text-yellow-500 text-3xl">★</span>
              ))}
            </div>
            <button
              onClick={() => navigate("/dashboard")}
              className="mt-6 w-full py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition"
            >
              Go to Dashboard
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ExamPage;
