import React, { useContext } from "react";
import "./style/style.css";

import Main from "./components/Main";
import { LoginPage } from "./pages/index";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { isAuth } = useContext(AuthContext);
  
  return <>{isAuth ? <Main /> : <LoginPage />}</>;
};
export default App;
