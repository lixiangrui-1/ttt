import React, { FC } from "react";
import styled from "./index.module.css";

interface IList {
  imgs: string;
  item: string;
  param: string;
  styles?: object;
  option?: any;
}

const GoodesList: FC<IList> = ({ imgs, item, param, styles, option }) => {
  return (
    <div className={styled.list} style={styles} onClick={() => option()}>
      <img src={imgs} alt="" />
      <h4>{item}</h4>
      <p>¥{param}</p>
    </div>
  );
};

export default GoodesList;
