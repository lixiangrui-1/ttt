import { UPDATA_LIST } from "../consts";
import { getCategory } from "../../api/index";
import fn from "../../uilts/asyncProxy"

function list (data:any){
    return {
        type:UPDATA_LIST,
        data:data
    }
}
export default  fn(list,getCategory)