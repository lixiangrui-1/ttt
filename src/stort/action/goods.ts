import {UPDATA_GOODS} from '../consts/index'
import {getCartGoods} from '../../api/index'
import fn from '../../uilts/asyncProxy'
const goods = (data:any)=>{
    return {
        type:UPDATA_GOODS,
        data:data
    }
}

export default  fn(goods,getCartGoods) 