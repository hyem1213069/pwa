const str = "abcdef";


// reverse -> String.prototype.reverse 함수없음
// console.log(str.reverse());

const arrstr = str.split("");
console.log(arrstr);

// Array.prototype.reverse() 함수 있음
const reversStr = arrstr.reverse();
console.log(reversStr);

console.log(reversStr.join(""));

console.log(str.split("").reverse().join(""));