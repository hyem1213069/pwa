function solution(n, t) {
    var answer = 0;
    return n*(2**t);
}

console.log(solution(2, 10));
console.log(solution(7, 15));

// 리턴 값 구하기
// 세균의 마리수 n * (2**t)_n의 입출력 2(거듭제곱)t(경과시간)