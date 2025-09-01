import React from "react";

const TelegramLogin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b1220] text-[#e9f0ff]">
      <h2 className="text-2xl font-bold mb-6">Login with Telegram</h2>
      <a
        href="https://t.me/JasLangBot"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-[#0088cc] text-white font-semibold rounded-lg shadow-md hover:bg-[#0077b3] transition"
      >
        Login with Telegram
      </a>
    </div>
  );
};

export default TelegramLogin;
