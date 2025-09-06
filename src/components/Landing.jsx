import React, { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    // Telegram widget scriptini yuklash
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", "testnimadir2_bot"); // bot username
    script.setAttribute("data-size", "large");
    script.setAttribute("data-userpic", "true");
    script.setAttribute("data-onauth", "onTelegramAuth(user)");
    script.setAttribute("data-request-access", "write");
    script.async = true;
    document.getElementById("telegram-login").appendChild(script);
  }, []);

  // Login funksiyasi
  window.onTelegramAuth = (user) => {
    console.log("User:", user);

    // backendga yuborish
    fetch("http://localhost:8081/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: String(user.id),
        firstName: user.first_name || "",
        lastName: user.last_name || "",
        username: user.username || "",
        authDate: String(user.auth_date),
        hash: user.hash || "",
        chatId: String(user.id),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server javobi:", data);
      })
      .catch((err) => console.error("Xatolik:", err));
  };

  return (
    <div className="landing">
      <h2>Telegram orqali kirish</h2>
      <div id="telegram-login"></div>
    </div>
  );
};

export default Landing;
