import React, { useEffect, Fragment, useState } from "react";
import { connect } from "react-redux";
import detail from "../../stort/action/detail";
import { Carousel } from "antd-mobile";
import styled from "./index.module.css";
import Button from "../../components/Button/Button";
import { addCart } from "../../api/index";
function Detail(props: any) {
  let [num, setNum] = useState(0);
  useEffect(() => {
    let id = props.match.params.cid;
    props.dispatch(detail(id));
  }, []);
  return (
    <Fragment>
      <div className={styled.contentDetail}>
        {props.data ? (
          <Fragment>
            <div className={styled.bannerBox}>
              {props.data.pics ? (
                <Carousel autoplay={true} infinite>
                  {props.data.pics.map((item: any, index: number) => (
                    <img key={index} src={item.pics_big} alt="" />
                  ))}
                </Carousel>
              ) : (
                <div>玩命加载中。。。。。</div>
              )}
            </div>
            <p className={styled.p1}>{props.data.goods_name}</p>
            <p className={styled.p2}>¥{props.data.goods_price}</p>
            <div
              dangerouslySetInnerHTML={{ __html: props.data.goods_introduce }}
            ></div>
          </Fragment>
        ) : (
          <div>loading......</div>
        )}
      </div>
      <div className={styled.footerDetail}>
        <Button
          styles={{
            backgroundColor: "green",
            height: "100%",
            width: "30%",
          }}
          handler={() => {
            props.history.push("/goods");
          }}
        >
          {"查看购物车" + (num === 0 ? "" : num)}
        </Button>
        <Button
          styles={{
            height: "100%",
            width: "30%",
          }}
          handler={() => {
            let obj = {
              cat_id: props.data.cat_id,
              goods_id: props.data.goods_id,
              goods_name: props.data.goods_name,
              goods_number: props.data.goods_number,
              goods_price: props.data.goods_price,
              goods_weight: props.data.goods_weight,
              goods_small_logo: props.data.goods_small_logo,
            };
            let info = JSON.stringify(obj);
            setNum(num + 1);
            addCart({ info });
          }}
        >
          加入购物车
        </Button>
      </div>
    </Fragment>
  );
}

export default connect((state: any) => ({ data: state.detail }))(Detail);
