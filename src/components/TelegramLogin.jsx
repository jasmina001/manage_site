import React, { useEffect } from "react";
const TelegramLogin = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "JasLangBot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-userpic", "true");
    script.setAttribute("data-onauth", "onTelegramAuth(user)");
    script.setAttribute("data-request-access", "write");
    document.getElementById("tg-login").appendChild(script);
    window.onTelegramAuth = (user) => {
      document.getElementById("tg-login").style.display = "none";

      const profile = document.getElementById("profile");
      document.getElementById("p-photo").src = user.photo_url || "https://telegram.org/img/t_logo.png";
      document.getElementById("p-name").textContent = user.first_name + (user.last_name ? " " + user.last_name : "");
      document.getElementById("p-username").textContent = user.username ? "@" + user.username : "";
      document.getElementById("p-id").textContent = "ID: " + user.id;

      profile.style.display = "block";
    };
  }, []);
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
      <div className="card bg-gray-900 text-white rounded-xl p-8 shadow-xl text-center max-w-md w-full">
        <h1 className="text-2xl mb-2">Telegram bilan kirish</h1>
        <p className="text-gray-400 mb-6">Quyidagi tugma orqali autentifikatsiya qiling.</p>
        <div id="tg-login"></div>
        <div className="profile hidden mt-6" id="profile">
          <img id="p-photo" src="" alt="User photo" className="w-24 h-24 mx-auto rounded-full border-2 border-blue-400 mb-3"/>
          <h2 id="p-name" className="text-xl font-semibold"></h2>
          <span className="username text-blue-400 font-medium" id="p-username"></span>
          <span id="p-id" className="block mt-1 text-gray-400"></span>
        </div>
      </div>
    </div>
  );
};
export default TelegramLogin;
