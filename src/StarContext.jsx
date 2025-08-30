import React, { createContext, useState, useContext } from "react";

export const StarContext = createContext();

export const StarProvider = ({ children }) => {
  const [stars, setStars] = useState(0); // nechta yulduz yig'ilgan

  return (
    <StarContext.Provider value={{ stars, setStars }}>
      {children}
    </StarContext.Provider>
  );
};

// ✅ Custom hook qo'shamiz
export const useStars = () => {
  return useContext(StarContext);
};
