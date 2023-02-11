import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated }: any) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
