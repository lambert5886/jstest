
// 包装 常规函数为 promise, 

// 常规函数;
function defs(data){
    console.log('from defs >>> ', data);
    if(data){
        return data;
    }else{
        
    }
    
}
// 包装函数
function wrapPro(fn){
    let _s = new Promise( (resolve, reject) => {
        if(fn){
            resolve(fn);
        }else{
            reject('error >>> ||| ');
        }
    });
    _s.then( (result) => {
        console.log('from wrapPro >>> ', result);
        
    }, (error) => {
        
    });
    return _s;
}

let wrap1 = wrapPro(defs()).then( (result) => {
    console.log(' from wraped > ', result)
    return wrapPro(result)
});

wrapPro(wrap1).then( res => {
    console.log('outwrap > ', res)
}).catch( (res) => {
    console.log('error ||| >> ', res)
})



 