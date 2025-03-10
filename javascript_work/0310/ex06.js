const person = {
    name : "홍길동",
    age : 30,
    addr : "대구"
}

console.log(`name` in person);
console.log(`age` in person);
console.log(`addr` in person);

console.log(`phone` in person);

// in 은 프로토타입체인 안에 있는 모든 프로퍼티 대상으로
// trye false 체크한다.
console.log(`toString in Object.prototype`)
console.log(`toString` in Object.prototype)
console.log(`toString in person`)
console.log(`toString` in person)

// 하지만 for in에서 나오지 않는 이유는
// 16장에서 배운 데이터 프로퍼티
// 데이터 프로퍼티 디스크럽터로 확인해보면
// enumrable false가 되어져 있기 때문에 toString은 나오지않는다

for (const key in person) {
    console.log(key);
}