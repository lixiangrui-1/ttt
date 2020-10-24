import React, { FC } from "react";

import "./index.css";
import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Footer: FC = (props) => {
  return (
    <div className={"footer"}>
      <NavLink to={"/home"}>
        <div className={"icon"}>
          <HomeOutlined />
          <p>首页</p>
        </div>
      </NavLink>
      <NavLink to={"/list"}>
        <div className={"icon"}>
          <AppstoreOutlined />
          <p>分类</p>
        </div>
      </NavLink>
      <NavLink to={"/goods"}>
        <div className={"icon"}>
          <ShoppingCartOutlined />
          <p>购物车</p>
        </div>
      </NavLink>
      <NavLink to={"/my"}>
        <div className={"icon"}>
          <UserOutlined />
          <p>我的</p>
        </div>
      </NavLink>
    </div>
  );
};
export default Footer;
