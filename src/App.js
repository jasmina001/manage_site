// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Explanation from "./components/Explanation";
import ExamPage from "./components/ExamPage";
import TelegramLogin from "./components/TelegramLogin";
import Donation from "./components/Donation";   // 👉 qo‘shildi
import { StarProvider } from "./StarContext";
import ExamHistory from "./components/ExamHistory";

function App() {
  return (
    <StarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explanation" element={<Explanation />} />
          <Route path="/exam" element={<ExamPage />} />
          <Route path="/exams-history" element={<ExamHistory />} />
          <Route path="/telegram-login" element={<TelegramLogin />} />

          {/* ✅ Donation sahifasi route */}
          <Route path="/donation" element={<Donation />} />
        </Routes>
      </Router>
    </StarProvider>
  );
}

export default App;
