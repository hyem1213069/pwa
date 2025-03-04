// 16장 프로퍼티 어튜리뷰트
const obj = { name: "Alice" };
// 기본적으로 프로퍼티 어트리뷰트를 확인할 수 있음
const descriptor = Object.getOwnPropertyDescriptor(obj, "name");
// console.log(descriptor);

Object.defineProperty(obj, "age",{
    value :20,
    writable : false, // 변경가능하다
    enumerable : true, // 열거가능한
    configurable : true // 속성삭제가능
    })

console.log(obj); // {name: 'Alice'}

delete obj.age; // 삭제 시도

console.log(obj); // {name : 'Alice'},`age`는 그대로 남아있음
