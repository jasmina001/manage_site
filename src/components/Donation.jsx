import React, { useState } from "react";
import kartaImage from "../assets/karta.jpg";

const Donation = () => {
  const [copied, setCopied] = useState(false);

  const cardNumber = "8600 1234 5678 9012"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(cardNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

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
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
          Your donation helps us grow, improve our work, and continue building 
          <span className="font-semibold text-orange-500"> better projects</span> for everyone.
        </p>

       
        <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-lg p-3 shadow-md">
          <span className="font-mono text-lg text-gray-800">{cardNumber}</span>
          <button
            onClick={handleCopy}
            className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-orange-600 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
