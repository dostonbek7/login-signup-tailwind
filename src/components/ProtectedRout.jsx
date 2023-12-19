import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRout({ children, user }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/signup" />;
  }
}

export default ProtectedRout;
