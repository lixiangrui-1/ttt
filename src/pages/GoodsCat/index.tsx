import React, { useState, FC, useEffect, Fragment } from "react";
import styled from "./index.module.css";
import goods from "../../stort/action/goods";
import { connect } from "react-redux";
import { getCartGoods } from "../../api/index";
import fn from "../../uilts/asyncProxy";
const Goods: FC = (props: any): JSX.Element => {
  let [dataList, setDataList] = useState([{}]);
  useEffect(() => {
    props.dispatch(goods);
    async function fn() {
      let data = await getCartGoods();
      let goodsmsg: any = data.data.message.cart_info;
      let goodsData = Object.values(JSON.parse(goodsmsg));
      let goodsArr: Array<any> = goodsData.filter((item) => {
        return typeof item === "object";
      });
      setDataList(goodsArr);
    }
    fn();
  }, []);

  return (
    <div className={styled.goods}>
      {dataList.length > 1 ? (
        dataList.map((item: any, index: number) => {
          return (
            <Fragment key={index}>
              <div className={styled.goods_list}>
                <div className={styled.left}>
                  <input type="checkbox" />
                </div>
                <div className={styled.rigth}>
                  <div className={styled.imgs}>
                    <img src={item.goods_small_logo} alt="" />
                  </div>
                  <div className={styled.title}>
                    <div className={styled.title_top}>
                      {String(item.goods_name).slice(0, 25) + "..."}
                    </div>
                    <div className={styled.parmsa}>
                      <div className={styled.parmsa_left}>
                        {"¥" + item.goods_price}
                      </div>
                      <div className={styled.parmsa_right}>
                        <button className={styled.btn}>+</button>
                        <span className={styled.btn_content}>
                          {item.amount}
                        </span>
                        <button className={styled.btn}>-</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default connect((state: any) => {
  return { data: state.goods };
})(Goods);
