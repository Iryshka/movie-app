import AuthenticatedRouter from "./AuthenticatedRouter";
import UnauthenticatedRouter from "./UnauthenticatedRouter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../features/auth/authSlice.js";

function AppRouter() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userAuth.isAuth);
  const currentUser = localStorage.getItem("user-id");

  useEffect(() => {
    if (currentUser) {
      dispatch(setAuth({ isAuth: true, userId: currentUser }));
    }
  }, [currentUser]);

  return isAuth ? <AuthenticatedRouter /> : <UnauthenticatedRouter />;
}

export default AppRouter;
