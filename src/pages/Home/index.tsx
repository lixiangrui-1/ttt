import React, { Component, Fragment } from "react";
import { Carousel } from "antd-mobile";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import "./index.css";
import HomeList from "../../components/HomeList/HomeList";
import { connect } from "react-redux";
import home from "../../stort/action/home";
interface Iimgs {
  imgs: string[];
}
class Home extends Component<any, Iimgs> {
  state = {
    imgs: [
      "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_4@2x.png",
      "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_2@2x.png",
      "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_1@2x.png",
      "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_5@2x.png",
    ],
  };
  async componentDidMount() {
    this.props.dispatch(home);
  }
  render() {
    let { goodslist } = this.props;

    return !goodslist ? (
      <div>loading....</div>
    ) : (
      <Fragment>
        <input
          className={"InputTop"}
          type="text"
          placeholder={"搜索心仪的物品吧。。。"}
        />
        <div className={"context"}>
          <div className={"catitem"}>
            <Carousel autoplay={true} infinite>
              <img src={banner1} alt="" />
              <img src={banner2} alt="" />
              <img src={banner3} alt="" />
            </Carousel>
            <div className={"goodsNav"}>
              {this.state.imgs.map((item: string, index: number) => {
                return (
                  <img
                    className={"goodsNavone"}
                    src={item}
                    alt=""
                    key={index}
                    onClick={() => {
                      this.props.history.push("/list");
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div>
            {goodslist.map((item: any, index: number) => {
              return (
                <div className={"goodsBox"} key={index}>
                  <img src={item.group_img} alt="" />
                  {item.goods.map((item: any) => {
                    return (
                      <Fragment key={item.goods_id}>
                        <HomeList
                          option={() => {
                            this.props.history.push(
                              `/list/item/detail/${item.goods_id}`
                            );
                          }}
                          imgs={item.goods_big_logo}
                          item={item.goods_name}
                          param={`¥${item.goods_price}`}
                        >
                          找相似
                        </HomeList>
                      </Fragment>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className={"text-bottom"}>--------我也是有底线的--------</div>
        </div>
      </Fragment>
    );
  }
}

const mapState = (state: any) => {
  return {
    goodslist: state.home,
  };
};
export default connect(mapState)(Home);
