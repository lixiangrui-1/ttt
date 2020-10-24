import {UPDATA_DETAIL} from '../consts/index'
import {getGoodsDetail} from '../../api/index'
const detail = (data:any)=>{
    return {
        type:UPDATA_DETAIL,
        data:data
    }
}


const asyncdetail = (id: any) => async (dispatch: any) => {
let list = await getGoodsDetail(id);
  dispatch(detail(list.data.message));
};

export default asyncdetail