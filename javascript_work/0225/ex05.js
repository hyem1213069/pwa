// 객체리터럴{}
// new 생성자 함수

const obj = new Object();

obj.name = "홍길동";
obj.sayHello = function(){
    console.log(`Hi my name ${this.name}`);
}

console.log(obj.name);
obj.sayHello();