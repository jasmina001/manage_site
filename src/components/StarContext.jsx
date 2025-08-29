import React, { createContext, useState, useContext } from "react";

const StarContext = createContext();

export const useStars = () => useContext(StarContext);

export const StarProvider = ({ children }) => {
  const [stars, setStars] = useState(0);

  const addStar = () => setStars((prev) => prev + 1);
  const resetStars = () => setStars(0);

  return (
    <StarContext.Provider value={{ stars, addStar, resetStars }}>
      {children}
    </StarContext.Provider>
  );
};
