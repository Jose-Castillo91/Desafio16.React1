import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../assets/context/UserContext";

const RedirectIfAuth = ({ children }) => {
  const { token } = useContext(UserContext);
  return token ? <Navigate to="/" /> : children;
};

export default RedirectIfAuth;