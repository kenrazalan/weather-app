import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/app/login" />;
};

export default ProtectedRoute;
