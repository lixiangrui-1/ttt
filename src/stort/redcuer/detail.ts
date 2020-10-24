
import {UPDATA_DETAIL} from '../consts/index'

import { AnyAction } from "redux";
// redcuer 层 进行同步业务 更改state 返回更新后的state
//通过 dispatch调用并根据传过来的参数决定状态行为
const initialState = {
  data: null,
};

export default function  detail(state = initialState,action:AnyAction){
    switch (action.type){
        case UPDATA_DETAIL:
            return action.data
         
        default :
            return state
          
    }

}