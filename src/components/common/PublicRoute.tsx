import React from "react";
import { Navigate } from "react-router-dom";
interface Props {
  children: JSX.Element;
}
const PublicRoute: React.FC<Props> = ({ children }) => {
  const isExpire = false;

  if (isExpire) {
    return <Navigate to="/expired" replace={true} />;
  }
  return children;
};
export default PublicRoute;
