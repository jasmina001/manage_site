import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const Explanation = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate("/exam"); // ExamPage.jsx sahifasiga o'tkazadi
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Explanation</h2>
        <div className="flex justify-center mb-4">
          <AlertTriangle className="text-yellow-500" size={60} />
        </div>
        <ol className="list-decimal list-inside text-gray-800 space-y-3 text-sm">
          <li>Do not use various AI or additional aids during the exam!</li>
          <li>Texts cannot be copied.</li>
          <li>Do not leave the site or switch to another tab during the exam.</li>
          <li>If you violate the rules, your account may be blocked!</li>
        </ol>
        <button
          onClick={handleAccept}
          className="w-full mt-6 py-3 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition font-semibold"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default Explanation;
