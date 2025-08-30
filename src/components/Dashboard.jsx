import React from "react";
import { useNavigate } from "react-router-dom";
import { useStars } from "../StarContext";


const Dashboard = () => {
  const navigate = useNavigate();
  const { stars } = useStars();

  return (
    <div className="min-h-screen bg-[#E6F0FA] flex justify-center py-6 px-4">
      <div className="w-full max-w-sm md:max-w-3xl lg:max-w-5xl space-y-4">
       
        <div className="bg-white rounded-2xl shadow p-4 flex justify-between items-center">
          <span className="text-xl md:text-2xl font-bold">{stars}</span>
          <span className="text-yellow-500 text-2xl md:text-3xl">★</span>
        </div>

       
        <div
          onClick={() => navigate("/exams-history")}
          className="bg-orange-500 text-white rounded-2xl shadow p-4 md:col-span-2 cursor-pointer hover:opacity-90"
        >
          <h2 className="text-lg md:text-xl font-semibold">Exams history</h2>
          <p className="text-sm md:text-base opacity-90">
            View and analyze exam history!
          </p>
        </div>

        {/* Level + Score */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          <div
            onClick={() => navigate("/level")}
            className="bg-white rounded-2xl shadow p-4 text-center cursor-pointer hover:bg-gray-50"
          >
            <p className="text-2xl font-bold">B2</p>
            <p className="text-gray-500 text-sm">Your level</p>
          </div>
          <div
            onClick={() => navigate("/average-score")}
            className="bg-white rounded-2xl shadow p-4 text-center cursor-pointer hover:bg-gray-50"
          >
            <p className="text-2xl font-bold">57</p>
            <p className="text-gray-500 text-sm">Avg score</p>
          </div>
        </div>

        {/* Take exam + Donation */}
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => navigate("/explanation")}
            className="bg-green-500 text-white rounded-2xl shadow p-4 text-center font-medium hover:bg-green-600 transition"
          >
            Take exam <br />
            <span className="text-sm opacity-90">Test your knowledge</span>
          </button>
          <button
            onClick={() => navigate("/donation")}
            className="bg-red-600 text-white rounded-2xl shadow p-4 text-center font-semibold hover:bg-red-700 transition"
          >
            Donation <br />
            <span className="text-sm opacity-80">Support the team</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
