import React from "react";

const Dashboard = () => {
  const handleTakeExam = () => {
    alert("Exam boshlangan bo‘ladi 🚀"); 
    // yoki navigate('/exam') qilib yo‘naltirish mumkin
  };

  const handleDonation = () => {
    alert("Donation sahifasiga o‘tasiz ❤️"); 
    // yoki redirect to payment
  };

  return (
    <div className="min-h-screen bg-[#E6F0FA] flex justify-center py-6 px-4">
      <div className="w-full max-w-sm md:max-w-3xl lg:max-w-5xl space-y-4">
        {/* Score */}
        <div className="bg-white rounded-2xl shadow p-4 flex justify-between items-center">
          <span className="text-xl md:text-2xl font-bold">320</span>
          <span className="text-yellow-500 text-2xl md:text-3xl">★</span>
        </div>

        {/* Top sections in grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Exams history */}
          <div className="bg-orange-500 text-white rounded-2xl shadow p-4 md:col-span-2 cursor-pointer hover:opacity-90">
            <h2 className="text-lg md:text-xl font-semibold">Exams history</h2>
            <p className="text-sm md:text-base opacity-90">
              View and analyze exam history!
            </p>
          </div>

          {/* Level + Score */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <div className="bg-white rounded-2xl shadow p-4 text-center">
              <p className="text-2xl font-bold">B2</p>
              <p className="text-gray-500 text-sm">Your level</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-4 text-center">
              <p className="text-2xl font-bold">57</p>
              <p className="text-gray-500 text-sm">Avg score</p>
            </div>
          </div>
        </div>

        {/* Take exam + Donation in row on big screen */}
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={handleTakeExam}
            className="bg-green-500 text-white rounded-2xl shadow p-4 text-center font-medium hover:bg-green-600 transition"
          >
            Take exam <br />
            <span className="text-sm opacity-90">Test your knowledge</span>
          </button>
          <button
            onClick={handleDonation}
            className="bg-red-600 text-white rounded-2xl shadow p-4 text-center font-semibold hover:bg-red-700 transition"
          >
            Donation <br />
            <span className="text-sm opacity-80">Support the team ❤️</span>
          </button>
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="text-lg md:text-xl font-semibold mb-2">Leaderboard</h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>🥇 Otabek Nabiyev</span>
              <span className="text-yellow-500">750★</span>
            </li>
            <li className="flex justify-between items-center">
              <span>🥈 Kimidiro Nimajan</span>
              <span className="text-yellow-500">714★</span>
            </li>
            <li className="flex justify-between items-center">
              <span>🥉 Nimajanov Kimdir</span>
              <span className="text-yellow-500">691★</span>
            </li>
            <li className="flex justify-between items-center">
              <span>🙋 You</span>
              <span className="text-yellow-500">320★</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
