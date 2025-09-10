import React from "react";

const Donation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] px-6 py-10">
      {/* Card image joyi */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
        {/* Bu yerga rasmni qo‘yasiz */}
        <div className="w-72 h-44 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
          <span className="text-gray-500">[Card image here]</span>
        </div>

        {/* Matn */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Thank you for your support! 🙏
        </h2>
        <p className="text-gray-600 text-center leading-relaxed">
          Your donation helps us improve and continue building new features.
          We appreciate your kindness and support to our team. 💙
        </p>
      </div>
    </div>
  );
};

export default Donation;
