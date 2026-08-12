import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const role = localStorage.getItem("role");
  return role === "Admin" ? children : <Navigate to="/" />;
};

export default AdminProtectedRoute;
