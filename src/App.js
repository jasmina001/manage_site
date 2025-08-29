import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Explanation from "./components/Explanation"; // qo‘shildi
import ExamPage from "./components/ExamPage"; // qo‘shildi

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explanation" element={<Explanation />} /> {/* qo‘shildi */}
        <Route path="/exam" element={<ExamPage />} /> {/* Explanation → ExamPage */}
      </Routes>
    </Router>
  );
}

export default App;
