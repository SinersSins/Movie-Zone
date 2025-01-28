//create --- provide----consume

import { createContext, useState } from "react";

export const TheContext = createContext();

export const TheContextProvider = ({ children }) => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <TheContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </TheContext.Provider>
  );
};
