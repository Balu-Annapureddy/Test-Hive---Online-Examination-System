import { Navigate } from "react-router-dom";

const UserProtectedRoute = ({ children }) => {
  const role = localStorage.getItem("role");
  return role === "User" ? children : <Navigate to="/" />;
};

export default UserProtectedRoute;
