import React, { createContext, useContext, useState } from "react";

const StarContext = createContext();

export const StarProvider = ({ children }) => {
  const [stars, setStars] = useState(0);

  return (
    <StarContext.Provider value={{ stars, setStars }}>
      {children}
    </StarContext.Provider>
  );
};

export const useStars = () => useContext(StarContext);
