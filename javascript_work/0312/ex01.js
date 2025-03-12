const reg = new RegExp(/[a-b]+/);
const str="123";
const str1 = new String("123");

console.log(reg.test('abc')); // true
console.log(reg.test('1020')); // true

// regExp 객체 타입
console.log(typeof reg);

function solution(s) {
    const re = /^\d+$/;
    return re.test(s) && (s.length == 4 || s.length ==6);
}