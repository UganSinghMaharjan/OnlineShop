import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, userRole }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (userRole && userRole !== "admin") {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default PrivateRoute;
