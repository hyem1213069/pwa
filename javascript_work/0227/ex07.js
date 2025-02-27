const obj1 = {}; // 호출 할 수없다
const obj2 = function(){}; // 호출 할 수 있다
console.log(`obj2.length ${obj2.length}`);
console.log(`obj2.length ${obj2.length}`);

const name = '홍길동';
const incr = function(num) {
    return ++num;
}
const decr = function(num){
    return --num;
}

// const auxs = {incr, decr}; _개체 축약 표현
const auxs = {
    name,
    incr,
    decr
};

function makeCounter(aux) {
    let num =0;
    return function (){
        num = (function (num) { return ++num;})(num);
        // num = aux(num);
        return num;
    }
}

// const increaser = makeCounter(auxs.incr);
// const increaser = makeCounter(function(num){return ++num;});

function makeCounter(aux){
    let num = 0;
    return function(){
        num = (function(num){return++num;})(num);
        return num;
    }
}

const increaser = makeCounter(auxs.incr);
console.log(increaser()); //1
console.log(increaser()); //2
console.log(increaser()); //3

// console.log(increaser);
// console.log(`increaser ${increaser}`);

// console.log(incr(10));
// console.log(auxs.decr(10));
