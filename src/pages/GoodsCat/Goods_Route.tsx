import { Route, Redirect } from "react-router-dom";
import React, { FC } from "react";
import Goods from "./index";

const Goods_Route: FC = () => {
  let isLogin = window.sessionStorage.getItem("token");

  return isLogin ? (
    <Route component={Goods}></Route>
  ) : (
    <Redirect to="/my/nologin" />
  );
};

export default Goods_Route;
