import { createContext, useContext, useState } from "react";

const AppCon = createContext();

const AppProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  return <AppCon.Provider value={{item, setItem}}>{children}</AppCon.Provider>;
};
const AppUCon = () => useContext(AppCon);

export { AppProvider, AppUCon };
