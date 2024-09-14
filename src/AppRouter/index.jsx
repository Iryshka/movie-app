import AuthenticatedRouter from "./AuthenticatedRouter";
import UnauthenticatedRouter from "./UnauthenticatedRouter";
import { useState } from "react";
import { useSelector } from "react-redux";

function AppRouter() {
  const isAuth = useSelector((state) => state.userAuth.isAuth);

  return isAuth ? <AuthenticatedRouter /> : <UnauthenticatedRouter />;
}

export default AppRouter;
