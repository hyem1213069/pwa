class Person{
    age = 10; // 프로퍼티는 외부에서 선언가능해졌다
    constructor(name){
        // this = {};
        this.name = name;
        // {name: "Lee"}
        // return this;
        return{};
    }

    // constructor는 생략 가능하다, 없어도 있는 것 처럼 동작한다.
}

const me = new Person("Lee");
console.log(me); 