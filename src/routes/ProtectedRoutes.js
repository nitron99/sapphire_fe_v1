import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
//   const { isAuthenticated } = useSelector((state) => state.auth);
  const user = JSON.parse(sessionStorage.getItem("user"));

  const compName = children.type.name;
//   console.log("isAuth", isAuthenticated);
  return compName === "AuthPage" ? (
    !user ? (
      children
    ) : 
      <Navigate to="/dashboard" />
    ) : //  <Navigate to="/assessments" />
    user ? (
        children
    ) : (
        <Navigate to="/" />
    );
};

export default ProtectedRoutes;
