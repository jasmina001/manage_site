import React, { useEffect, useState } from "react";

const ExamHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://167.86.121.42:8080/api/test", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("API javobi:", data);

        if (data.success && Array.isArray(data.data)) {
          setHistory(data.data);
          console.log("Ma'lumot bor:", data.data.length > 0);
        } else {
          setHistory([]);
          console.log("Ma'lumot yo‘q");
        }
      })
      .catch((err) => {
        console.error("API error:", err);
        setHistory([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="lg:max-w-[75rem] md:mx-auto mx-4">
      <h2 className="md:text-[32px] sm:text-[30px] text-[28px] md:font-semibold font-bold my-4 text-center">
        Exams history
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Yuklanmoqda...</p>
      ) : history.length === 0 ? (
        <p className="text-center text-gray-500">Hozircha test ishlanmagan</p>
      ) : (
        <div className="space-y-3">
          {history.map((item) => (
            <div key={item.id} className="bg-[#BFBFBF] pb-2 rounded-xl">
              <div className="bg-[#FFA666] rounded-xl py-3 px-6 text-white font-semibold flex justify-between items-center">
                <p>{item.date}</p>
                <div className="bg-[#09B900] px-4 py-0.5 rounded-2xl">
                  {item.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExamHistory;
