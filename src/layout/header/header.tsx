import React, { FC } from "react";
import "./index.css";
interface IHead {
  children: string | any;
  handler?: Function;
}

const Header: FC<IHead> = ({ children, handler }) => {
  return (
    <div className={"header"}>
      {handler && (
        <div className={"top-left"} onClick={() => handler()}>
          {"⬅️"}
        </div>
      )}

      <div className={"top-text"}>{children}</div>
    </div>
  );
};
export default Header;
