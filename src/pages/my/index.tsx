import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";
import Button from "../../components/Button/Button";
import { TabBar } from "antd-mobile";
import { user as actionUser } from "../../stort/action/user";
class My extends Component<any, any> {
  render() {
    let user = this.props.data.user;
    return (
      <div className={"my-content"}>
        <div className={"my-top"}>
          <div className={"my-img"}>
            <div>
              <img
                className={"my-img-box"}
                src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3968417432,4100418615&fm=26&gp=0.jpg"
                alt=""
              />
            </div>
            {user === null ? <p>未登陆</p> : <p>{user.username}</p>}
          </div>
          {user === null ? (
            <Button
              handler={() => {
                this.props.history.push("/login");
              }}
              styles={{ border: "1px solid #fff", color: "#fff" }}
            >
              立即登陆
            </Button>
          ) : (
            <Button
              handler={() => {
                localStorage.removeItem("state");
                sessionStorage.removeItem("token");
                this.props.dispatch(actionUser(null));
              }}
              styles={{ border: "1px solid #fff", color: "#fff" }}
            >
              退出登陆
            </Button>
          )}
        </div>
        <div className={"my-dingdan"}>我的订单</div>
        <div className={"tap-bar"}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
          >
            <TabBar.Item
              title="所有订单"
              key="Home"
              icon={<i className="iconfont icon-dingdan"></i>}
              onPress={() => {
                this.props.history.push("/my/nologin");
              }}
            ></TabBar.Item>
            <TabBar.Item
              title="待付款"
              key="obligation"
              icon={<i className="iconfont icon-daifukuan"></i>}
              onPress={() => {
                this.props.history.push("/my/nologin");
              }}
            ></TabBar.Item>
            <TabBar.Item
              title="待发货"
              key="Mine"
              icon={<i className="iconfont icon-daifahuo"></i>}
              onPress={() => {
                this.props.history.push("/my/nologin");
              }}
            ></TabBar.Item>
          </TabBar>
        </div>
      </div>
    );
  }
}

export default connect((state: any) => {
  return { data: state };
})(My);
