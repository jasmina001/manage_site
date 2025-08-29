import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    region: "",
    city: "",
  });

  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // API chaqirish
      const response = await fetch("https://example.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        // foydalanuvchini localStorage ga saqlash
        localStorage.setItem("user", JSON.stringify(data.user || formData));

        // state ga set qilish
        setUser(data.user || formData);

        // dashboard sahifasiga yo‘naltirish
        window.location.href = "/dashboard";
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong!");
    }
  };

  useEffect(() => {
    // agar oldin kirgan bo‘lsa localStorage dan olish
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <div className="login-container">
      {user ? (
        <div className="profile">
          <div className="profile-icon">
            {user.fullname ? user.fullname.charAt(0).toUpperCase() : "U"}
          </div>
          <p>Welcome, {user.fullname}!</p>
        </div>
      ) : (
        <>
          <h2 className="login-title">Please answer my questions:</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="text"
              name="fullname"
              placeholder="Fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="region"
              placeholder="Region"
              value={formData.region}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <button type="submit">Continue</button>
          </form>

          {error && <p className="error">{error}</p>}
        </>
      )}
    </div>
  );
};

export default Login;
