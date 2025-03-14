// 어떤 특정 함수에서만 이 역할을 할 수 있도록 부여했다


const befor_incre = function (){
    let num = 1;
        num++;
        console.log(num);
};

// 즉시 실행함수로 만들면서 함수리턴하는 식
// 클로저 함수 생성
const incre = (function () {
    let num = 1;
    return function () {
        num++;
        console.log(num);
}
})();

incre();
incre();
incre();

console.log(++num);
console.log(num);