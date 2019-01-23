
// 包装 常规函数为 promise, 

// 常规函数;
function defs(data){
    console.log('from defs >>> ', data);
    return data;
}
// 包装函数
function wrapPro(fn){
    let _s = Promise.resolve(fn);
    _s.then( (result) => {
        console.log('from wrapPro >>> ', result);
    });
    return _s;
}

let wrap1 = wrapPro(defs('hello!')).then( (result) => {
    console.log(' from wraped > ', result)
    return wrapPro(result)
});

wrapPro(wrap1).then( res => {
    console.log('outwrap > ', res)
})

 