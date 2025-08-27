import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    region: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://example.com/api/login", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        window.location.href = "/dashboard"; 
      } else {
        alert("Login failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "JasLangBot"); 
    script.setAttribute("data-size", "large");
    script.setAttribute("data-auth-url", "https://sizning-saytingiz.com/auth/telegram"); 
    script.setAttribute("data-request-access", "write");
    document.getElementById("telegram-login-btn").appendChild(script);
  }, []);

  return (
    <div className="login-container">
      <h2 className="login-title">Please answer my questions:</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="fullname"
          placeholder="Fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="region"
          placeholder="Region"
          value={formData.region}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <button type="submit">Continue</button>
      </form>

   
      <div id="telegram-login-btn" style={{ marginTop: "20px" }}></div>
    </div>
  );
};

export default Login;
