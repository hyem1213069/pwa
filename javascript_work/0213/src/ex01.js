// 할머니가 보시기 편하도록 글자 한 자 한 자를
// 가로 2cm 크기로 적으려고 하며,

function solution(message) {
    return message.length * 2;
}

console.log(solution("happy birthday!"));
console.log(solution("I love you~"));

//---------------------------------------강사님 풀이//

// hello world! -> 글자수 세려서 곱하기 2
function solution(str) {
    console.log(str, str.length);
    return str.length * 2;
}

const ret1 = solution('hello world!');
console.log(ret1);
const ret2 = solution('hell');
console.log(ret2);