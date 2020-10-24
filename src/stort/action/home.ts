import { UPDATA_HOME } from "../consts";
import { getHomeGoodslist } from "../../api/index";
import fn from '../../uilts/asyncProxy'

function homes(data: any) {
  return {
    type: UPDATA_HOME,
    data:data,
  };
}
export default fn(homes,getHomeGoodslist)
