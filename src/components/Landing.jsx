import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero.png";
import logo from "../assets/logo.png"; 

const Landing = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/telegram-login"); // TelegramLogin componentga o'tish
  };

  return (
    <div className="h-screen flex flex-col justify-between items-center bg-white px-6 py-8 max-w-md mx-auto md:max-w-2xl">
      
      <img
        src={logo}
        alt="logo"
        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
      />

      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-snug mb-6">
          Find out <br /> your English level!
        </h1> 
        <img src={heroImg} alt="hero" className="w-72 md:w-96 lg:w-[28rem]" />
      </div>

      <button
        onClick={handleStart}
        className="w-full bg-orange-500 text-white py-3 rounded-full text-lg md:text-xl font-medium shadow-md hover:bg-orange-600 transition"
      >
        Start
      </button>

    </div>
  );
};

export default Landing;
