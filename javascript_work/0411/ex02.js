// ex5
// const value = 10;
// const func = ()=> {console.log("test")};
// const obj = {a:10, b:20}

// es6
const [value,func, obj] =
[10,
    ()=>{console.log('test')
        obj.b = 30;
    }, 
    {a:10, b:20}];

console.log(value);
console.log(func);
console.log(obj);

func();

console.log(obj);

