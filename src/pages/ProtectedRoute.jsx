import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    // Navigate can only be user as a JSX component, while navigate can be used as a function.
    return <Navigate to={"/"} />;
  }
  return children;
};

export default ProtectedRoute;
