import React, { Fragment, useState, useEffect } from "react";
import Home from "../../pages/Home/index";
import My from "../../pages/my";
import Nologin from "../../pages/my/nologin/index";
import GoodsCat from "../../pages/GoodsCat";
import Reg from "../../pages/reg/reg";
import Login from "../../pages/login/login";
import Def from "../../pages/def";
import List from "../../pages/List";
import Item from "../../pages/List/item/index";
import Detail from "../../pages/detail/index";
import Header from "../header/header";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Footer from "../footer/footer";
import Goods_Route from "../../pages/GoodsCat/Goods_Route";
function App(props: any) {
  let [data, setData] = useState(true);
  let [foot, setFoot] = useState(true);
  let [name, setName] = useState("");
  useEffect(() => {
    switch (props.location.pathname) {
      case "/home":
        setData(false);
        break;
      case "/reg":
        setName("注册");
        setData(true);
        break;
      case "/list":
        setName("分类");
        setData(true);
        break;
      case "/goods":
        setName("购物车");
        setData(true);
        break;
      case "/login":
        setName("登陆");
        setData(true);
        break;
      case "/my":
        setName("我的");
        setData(true);
        break;
      default:
        setData(true);
        setName("");
    }
    if (/(\/list\/item\/\d)/.test(props.location.pathname)) {
      setFoot(false);
      setData(true);
      setName("详情页");
    } else if (/(\/list\/item\/detail\/\d)/.test(props.location.pathname)) {
      setFoot(false);
      setData(true);
      setName("商品详情");
    } else {
      setFoot(true);
    }
  });

  return (
    <Fragment>
      {data && (
        <Header
          handler={() => {
            props.history.go(-1);
          }}
        >
          {name}
        </Header>
      )}
      <div className={"content"}>
        <Switch>
          <Route path={"/home"} component={Home} />
          <Route path={"/list"} exact component={List} />      
          {/* <Route path={"/goods"} exact component={GoodsCat} /> */}
          <Route path={"/goods"} component={Goods_Route} />
          <Redirect to={"/home"} from={"/"} exact />
            
          <Route
            path={"/list/item/detail/:cid"}
            exact
            component={Detail}
          ></Route>
           
          <Route path={"/def"} exact component={Def} />
          <Route path={"/reg"} exact component={Reg} />
          <Route path={"/login"} exact component={Login} />
          <Route path={"/my"} exact component={My} />
          <Route path={"/my/nologin"} exact component={Nologin} />
          <Route path={"/list/item/:cid"} exact component={Item}></Route>
          <Route component={() => <div>404页面不存在</div>} exact />
        </Switch>
      </div>

      {foot && <Footer></Footer>}
    </Fragment>
  );
}

export default withRouter(App);
