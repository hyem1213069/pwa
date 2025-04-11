const str = "abcd!!1234";

// \w A-Za-z0-9_ 까지 반복되는거 찾음
console.log(str.match(/\w/));
console.log(str.match(/\w+/g));
// 시작을 의미한다^
console.log(str.match(/^(\w+)+/g));

// A-Za-z0-9_아닌거