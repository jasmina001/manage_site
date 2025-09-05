import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    region: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

 
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.fullname) newErrors.fullname = "Ism kiritilishi shart!";
    if (!formData.phone) {
      newErrors.phone = "Telefon raqam shart!";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Faqat raqam bo‘lishi kerak!";
    }
    if (!formData.region) newErrors.region = "Viloyat tanlang!";
    if (!formData.city) newErrors.city = "Shahar tanlang!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

       
        <div>
          <input
            type="text"
            name="fullname"
            placeholder="Ismingiz"
            value={formData.fullname}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.fullname ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-orange-500`}
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
          )}
        </div>

    
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Telefon raqamingiz"
            value={formData.phone}
            onChange={handleChange}
            inputMode="numeric"
            pattern="[0-9]*"
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-orange-500`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

      
        <div>
          <input
            type="text"
            name="region"
            placeholder="Viloyatingiz"
            value={formData.region}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.region ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-orange-500`}
          />
          {errors.region && (
            <p className="text-red-500 text-sm mt-1">{errors.region}</p>
          )}
        </div>

    
        <div>
          <input
            type="text"
            name="city"
            placeholder="Shaharingiz"
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.city ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-orange-500`}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>

     
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Login;
