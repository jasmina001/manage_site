import React from "react";

const ExamHistory = () => {
  return (
    <div className="lg:max-w-[75rem] md:mx-auto mx-4">
      <h2 className="md:text-[32px] sm:text-[30px] text-[28px] md:font-semibold font-bold my-4 text-center">
        Exams history
      </h2>
      <div className="bg-[#BFBFBF] pb-2 rounded-xl">
        <div className="bg-[#FFA666] rounded-xl py-3 px-6 text-white font-semibold flex justify-between items-center">
          <p>02.08.2025</p>
          <div className="bg-[#09B900] px-4 py-0.5 rounded-2xl">54</div>
        </div>
      </div>
    </div>
  );
};

export default ExamHistory;
