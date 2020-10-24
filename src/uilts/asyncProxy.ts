
let fn = (obj:Function,func:Function)=>(dispatch:any)=>{
    let p = new Proxy(obj,{
       async apply(func,obj,children){
            let {data} = await children[0]()
            let list = data.message
            dispatch(Reflect.apply(func,null,[list]))     
        }
    })
  return  p.apply(obj,[func])
}

export default fn