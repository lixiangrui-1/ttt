import {UPDATA_LOGIN} from '../consts/index';
 
export const user = (data:any)=>{
    return {
        type:UPDATA_LOGIN,
        data
    }
}

