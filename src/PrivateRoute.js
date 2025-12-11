import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, roles }) {

  const user = JSON.parse(localStorage.getItem("user"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  // If no one is logged in
  if (!user && !admin) {
    return <Navigate to="/login" />;
  }

  // If specific roles are required
  if (roles) {
    if (roles.includes("admin") && !admin) {
      return <Navigate to="/login" />;
    }
    if (roles.includes("customer") && !user) {
      return <Navigate to="/login" />;
    }
  }

  return children;
}

export default PrivateRoute;
