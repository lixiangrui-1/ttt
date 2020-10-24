import React, { FC, Fragment } from "react";
import styled from "./button.module.css";
interface Ibtn {
  children: string;
  handler: Function;
  styles?: object;
}

const Button: FC<Ibtn> = ({ children, handler, styles }) => {
  return (
    <Fragment>
      <button className={styled.btn} onClick={(e) => handler(e)} style={styles}>
        {children}
      </button>
    </Fragment>
  );
};
Button.defaultProps = {
  children: "按钮",
};
export default Button;
