import React, { FC } from "react";
import GoodsList from "../GoodsList/GoodsList";
import Button from "../Button/Button";
import styled from "./index.module.css";
import Hoc from "../Hoc/Hoc";

interface IHoc {
  children: string;
  imgs: string;
  item: string;
  param: string;
  handler?: Function;
  styles?: object;
  option?: Function;
}

const HomeList: FC<IHoc> = ({ children, handler, ...rest }) => {
  const List = Hoc(GoodsList);
  const Btn = Hoc(Button);
  return (
    <div className={styled.listBox}>
      <List {...rest} />
      <Btn
        handler={handler}
        styles={{
          backgroundColor: "#fff",
          color: "#108ee9",
          border: " #108ee9 1px solid",
          margin: "0 auto",
        }}
      >
        {children}
      </Btn>
    </div>
  );
};
HomeList.defaultProps = {
  handler: () => {},
};
export default HomeList;
