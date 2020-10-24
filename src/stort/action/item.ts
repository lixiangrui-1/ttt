import { UPDATA_ITEM } from "../consts";
import { searchGoods } from "../../api/index";

const item = (data: any) => {
  return {
    type: UPDATA_ITEM,
    data: data,
  };
};
const asyncItem = (value: any) => async (dispatch: any) => {
let list = await searchGoods(value);
  dispatch(item(list.data.message.goods));
};

export default asyncItem;
