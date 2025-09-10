// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Landing from "./components/Landing";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Explanation from "./components/Explanation";
import ExamPage from "./components/ExamPage";
import ExamHistory from "./components/ExamHistory";
import TelegramLogin from "./components/TelegramLogin";

// Context
import { StarProvider } from "./StarContext";

function App() {
  return (
    <StarProvider>
      <Router>
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<Landing />} />

          {/* Auth pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/telegram-login" element={<TelegramLogin />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Exam-related pages */}
          <Route path="/explanation" element={<Explanation />} />
          <Route path="/exam" element={<ExamPage />} />
          <Route path="/exams-history" element={<ExamHistory />} />
        </Routes>
      </Router>
    </StarProvider>
  );
}

export default App;
