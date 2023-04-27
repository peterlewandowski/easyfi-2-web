import { useContext, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

interface AnonRouteProps {
  children: ReactNode | ReactNode[];
}

export function AnonRoute({ children }: AnonRouteProps) {
  const { user } = useContext(UserContext);

  return <>{!user ? <Navigate to="/dashboard" replace /> : children};</>;
}
