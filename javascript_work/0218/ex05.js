// 익명함수 즉시호출
(function(){
     var a = 10;
     return function (x,y) {
        return x+y+a;
    };
}());
console.log(test(1,2));

const test = function (x,y) {
       return x+y+10;
   };

var add1 = (function(){
    var a = 10;
    return function (x,y) {
        return x+y+a;
    };
}());

console.log(add1(1,2));