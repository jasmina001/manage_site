import React from "react";
import kartaImage from "../assets/karta.jpg"; 
const Donation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex justify-center items-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-lg w-full text-center transform hover:scale-[1.02] transition duration-300">

        <div className="mb-6">
          <img
            src={kartaImage}
            alt="Karta"
            className="mx-auto w-72 rounded-xl shadow-lg border border-gray-200"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">
        Thank you for supporting our team!
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Your donation helps us grow, improve our work, and continue building 
          <span className="font-semibold text-orange-500"> better projects</span> for everyone.
        </p>
      </div>
    </div>
  );
};

export default Donation;
