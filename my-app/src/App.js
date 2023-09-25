import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./const";
import { Home } from "./pages/Home/index.js";
import { Profile } from "./pages/Profile/index.js";
import { Navigate } from "react-router-dom";
import { ErrorRoute } from "./pages/Root/error404";
import "./styles/index.scss";

const App = () => { // замість function *назва* {}, const *назва* = () => {}
  const { home, profile } = ROUTES;

  return (
    <Routes>
      <Route path = {home} element = {<Home />}/>
      <Route path = {profile} element = {<Profile />}/>
      <Route path = {"/"} element = {<Navigate replace to = {"/home"} />}/>
      <Route path="*" element = {<Navigate replace to = {<ErrorRoute />} />} />
    </Routes>
  
  );
};

export default App;
