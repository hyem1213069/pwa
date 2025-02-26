// this는 3가지 상황에 따라 다르다
// 1. 일반함수로서 호출 -> global window
// 2. 메서드로서 호출
// 3. new 생성자 함수로 호출

function foo(){
    console.log(this);
    console.log(this.name)
}

// 1. 일반함수로서 호출
// foo();

const name = "홍길동";
// 10장 객체 리터럴
const obj = {
    name,
    // 메서드
    foo : function(){console.log(this);}
};
// 메서드로 호출 -> 부모객체인 obj가리킨다
// obj.foo();

// 3. new 생성자 함수로 호출
new foo();
// console.log(obj);

// 전역개체 globalThis 저거도 안적어도
// globalThis.setTimeout(function(){
//     console.log('test')}
//     ,1000);

// console.log(globalthis);

// var a = 10;
// cosnole.log(a);
// console.log(window.a);

// 브라우저에서는 전역개체 window
// node라는 백엔드 global
// 생략가능한 전역에 객체를 가르키는 겁니다.