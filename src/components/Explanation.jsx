import React, { useState } from "react";
import { useStars } from "../StarContext";

const TakeExam = () => {
  const { stars, setStars } = useStars();
  const [questions] = useState([
    { q: "2+2=?", options: ["3", "4", "5"], correct: "4" },
    { q: "5-2=?", options: ["2", "3", "4"], correct: "3" },
  ]);
  const [current, setCurrent] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === questions[current].correct) {
      setStars(stars + 1); // ⭐ har to‘g‘ri javob uchun oshiradi
    }
    setCurrent(current + 1);
  };

  return (
    <div className="p-6">
      {current < questions.length ? (
        <div>
          <h2 className="text-lg font-semibold">{questions[current].q}</h2>
          <div className="space-y-2 mt-3">
            {questions[current].options.map((o, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(o)}
                className="block w-full bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
              >
                {o}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-lg font-bold">Test tugadi!</p>
      )}
    </div>
  );
};

export default TakeExam;
