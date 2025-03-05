function Person(name, age){
    // 원시값 값으 비교
    this.name = name;
    // 원시값 값의 비교
    this.age = age;

    // 함수도 객체다
    // 객체는 비교할 때 참조값이 비교가 일어난다
    this.print = function(){
        console.log(`name = ${name} age=${age}`)
    }
}

const p1 = new Person('홍길동',20);
const p2 = new Person('박길동',30);
const p3 = new Person('이길동',40);

console.log(p1.print === p2.print)
console.log(p2.print === p3.print)