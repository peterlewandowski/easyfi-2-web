import { useContext, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

interface AuthRouteProps {
  children: ReactNode | ReactNode[];
}

export const AuthRoute = ({ children }: AuthRouteProps) => {
  const { user } = useContext(UserContext);

  return <>{user ? children : <Navigate to="/login" replace />}</>;
};
