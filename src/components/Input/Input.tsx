
import React,{FC} from 'react';
import styled from "./Input.module.css"
interface Init{
    children?:any,
    type:string,
    value?:string,
    handler:Function,
    placeholder?:string,
    styles?:object,
}
//参数接受props对象== 解构{} 使用泛型接口约束
const Input:FC<Init>=({children,type,value,handler,placeholder,styles})=>{
    return (
        <div className={styled.input}>
            {
               children ? <label>
                {children}
                <input
                    placeholder={placeholder} 
                    type={type}
                    value= {value}
                    onChange={(e)=>handler(e.target.value)}
                    style={styles}
                />
                </label>: 
                <input
                    placeholder={placeholder} 
                    type={type}
                    value= {value}
                    onChange={(e)=>handler(e.target.value)}
                    style={styles}
                />
            }
            
        </div>
    )
}

export default Input


