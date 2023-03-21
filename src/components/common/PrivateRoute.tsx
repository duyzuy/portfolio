import React from "react";
import { StorageKEY } from "../../models";
import { Navigate } from "react-router";

interface Props {
  children: JSX.Element;
}
const PrivateRoute: React.FC<Props> = ({ children }) => {
  const authToken = localStorage.getItem(StorageKEY.authToken);
  if (authToken) {
    return children;
  }

  return <Navigate to="/" />;
};
export default PrivateRoute;
