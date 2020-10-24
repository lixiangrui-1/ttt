import React from "react";
import Button from "../../../components/Button/Button";
import styled from "./index.module.css";
export default function index(props: any) {
  return (
    <>
      <div className={styled.text}>未登陆请先登陆再查看订单</div>
      <div className={styled.btn}>
        <Button
          handler={() => {
            props.history.push("/login");
          }}
        >
          去登陆
        </Button>
        <Button
          styles={{ backgroundColor: "#e94f4f" }}
          handler={() => {
            props.history.push("/reg");
          }}
        >
          去注册
        </Button>
      </div>
    </>
  );
}
