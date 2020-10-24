import React, { FC, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styled from "./login.module.css";
import { submitLogin } from "../../api/index";
import * as action from "../../stort/action/user";
const Login: FC = (props: any) => {
  const [name, setname] = useState("");
  const [word, setword] = useState("");
  const login = (name: string, word: string) => {
    submitLogin({ username: name, password: word }).then((res: any) => {
      if (res.data.meta.status === 200) {
        sessionStorage.setItem("token", res.data.message.token);
        props.actions.user(res.data.message);
        localStorage.setItem("state", JSON.stringify(res.data.message));
        props.history.push("/my");
      } else {
        setname("账号错误");
        setword("密码错误");
      }
    });
  };
  return (
    <div>
      <div>
        <Input
          type="text"
          handler={setname}
          value={name}
          placeholder={"请输入用户名或手机号"}
        >
          用户名
        </Input>
        <Input
          type="password"
          handler={setword}
          value={word}
          placeholder={"请输入密码"}
        >
          密码
        </Input>
        <div className={styled.btn}>
          <Button
            handler={() => {
              login(name, word);
            }}
          >
            立即登陆
          </Button>
          <Button
            handler={() => {
              props.history.push("/reg");
            }}
            styles={{ backgroundColor: "#e94f4f" }}
          >
            免费注册
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    data: state.user,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(action, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
