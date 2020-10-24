import {UPDATA_LIST} from '../consts/index'

import {AnyAction} from 'redux'

const initialState = {
    data:null,
}

export const counterRedcuer = (state = initialState.data,action:AnyAction)=>{
    switch (action.type){
        case UPDATA_LIST:
            return action.data;
        default:
            return state
    }
}