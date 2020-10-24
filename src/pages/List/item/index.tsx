import React, { FC, useEffect } from "react";
import itemData from "../../../stort/action/item";
import { connect } from "react-redux";
import GoodsList from "../../../components/GoodsList/GoodsList";
import "./index.css";
interface Idata {
  dispatch: any;
  data: Array<object>;
  match: any;
  history: any;
}
const Item: FC<Idata> = ({ dispatch, data, match, history }) => {
  useEffect(() => {
    dispatch(itemData(match.params.cid));
  }, []);
  return (
    <div className={"item-list-content"}>
      <div className={"goodslist-box-item"}>
        {data ? (
          data.map((item: any, index: number) => {
            return (
              <div key={index} className={"goodslist-box-item-index"}>
                <GoodsList
                  option={() => {
                    history.push(`/list/item/detail/${item.goods_id}`);
                  }}
                  imgs={item.goods_small_logo}
                  item={item.goods_name}
                  param={item.goods_price}
                ></GoodsList>
              </div>
            );
          })
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
};

export default connect((state: any) => {
  return {
    data: state.item,
  };
})(Item);
