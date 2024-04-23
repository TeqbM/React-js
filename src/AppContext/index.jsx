import { createContext, useContext, useState } from "react";

const AppCon = createContext();

const AppProvider = ({ children }) => {
  const [cou, setCou] = useState(0);
  return <AppCon.Provider value={{ cou, setCou }}>{children}</AppCon.Provider>;
};
const AppUCon = () => useContext(AppCon);

export { AppProvider, AppUCon };
