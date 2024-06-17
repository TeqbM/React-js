import { createContext, useContext,useEffect,useState } from "react";

const AppContext = createContext();


const AppProvider = ({ children }) => {
  const [carti, setCarti] = useState([])

  return <AppContext.Provider value={{carti,setCarti}}>{children}</AppContext.Provider>;
};
  
const AppUseCon = () => useContext(AppContext);

export { AppProvider, AppUseCon, AppContext };




