import React, { FC, useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styled from "./reg.module.css";
import { getVerigyCode, submitRegister } from "../../api/index";
const Reg: FC = (props: any) => {
  const [cell, setcell] = useState("");
  const [cells, setcells] = useState("");
  const [emall, setemall] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [status, setStatus] = useState("");
  //获取验证码
  const successToast = () => {
    getVerigyCode(cell).then((res: any) => {
      setcells(res.data.message);
    });
  };
  //注册
  const reg = (
    cell: string,
    cells: string,
    emall: string,
    password: any,
    name: string
  ) => {
    submitRegister({
      mobile: cell,
      code: cells,
      email: emall,
      pwd: password,
      gender: name,
    }).then((res: any) => {
      console.log(res.data);

      if (res.data.meta.status === 200) {
        setStatus("注册成功点击跳转");
      } else {
        return;
      }
    });
  };
  return (
    <div className={styled.content}>
      <div className={styled.reg}>
        <Input
          type="text"
          handler={setcell}
          value={cell}
          placeholder={"请输入手机号码"}
        >
          <span style={{ color: "red" }}>*</span>
          手机号码
          <Button
            handler={() => {
              if (cell.length < 11) {
                return;
              } else {
                successToast();
              }
            }}
            styles={{
              borderRadius: 0,
              backgroundColor: "#c9c9c9",
              border: "1px soild #898998",
              position: "absolute",
              top: "0px",
              right: "0px",
            }}
          >
            获取验证码
          </Button>
        </Input>
        <Input
          type="text"
          handler={setcells}
          value={cells}
          placeholder={"请输入验证码"}
        >
          <span style={{ color: "red" }}>*</span>验证码
        </Input>
        <Input
          type="text"
          handler={setemall}
          value={emall}
          placeholder={"请输入邮箱"}
        >
          <span style={{ color: "red" }}>*</span>邮箱
        </Input>
        <Input
          type="text"
          handler={setname}
          value={name}
          placeholder={"请输入用户名"}
        >
          <span style={{ color: "red" }}>*</span>性别
        </Input>
        <Input
          type="password"
          handler={setpassword}
          value={password}
          placeholder={"请输入密码"}
        >
          <span style={{ color: "red" }}>*</span>密码
        </Input>
        <div className={styled.btn}>
          <Button
            handler={() => {
              if (cell && cells && emall && name && password) {
                if (name === "男" || name === "女") {
                  reg(cell, cells, emall, password, name);
                } else {
                  setname("性别输入有误");
                }
              } else {
                return;
              }
            }}
          >
            立即注册
          </Button>
          <Button
            handler={() => {
              props.history.push("/login");
            }}
            styles={{ backgroundColor: "#e94f4f" }}
          >
            取消
          </Button>
        </div>
        {status && (
          <Button
            handler={() => {
              props.history.push("/login");
            }}
            styles={{
              display: "block",
              margin: "auto",
              width: "1.5rem",
            }}
          >
            {status}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Reg;
