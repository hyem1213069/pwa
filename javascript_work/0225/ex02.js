// 데이터 프로퍼티 어튜리뷰트
const obj = {name : 'Allce'};

// 올바른 변수명으로 수정
const besc = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(besc);

// 속성 추가
Object.defineProperty(obj,'age',{
    value : 20,
    writable : true,
    enumerable: false,
    configurable : false,
})

// 속성 삭제 시도
delete obj.name;
delete obj.age;

// 값 변경 시도
obj.age = 30;

// 속성 값 확인
console.log(obj.name);
console.log(obj.age);

console.log('-----------------------')
for (const key in obj) {
    console.log(key);
}

