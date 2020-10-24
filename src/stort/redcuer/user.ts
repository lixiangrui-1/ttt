import {UPDATA_LOGIN} from '../consts/index'

import {AnyAction} from 'redux'

const initialState = 
    null


const user = (state=initialState,action:AnyAction)=>{
    switch(action.type){
        case UPDATA_LOGIN:
            return action.data;
        default:
            return state   
    }

}
export default user