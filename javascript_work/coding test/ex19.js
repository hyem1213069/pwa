// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
    return (s.length===4|| s.length ===6) && !isNaN(s);
}
// isNaN(s)는 문자열에서 숫자인지 제대로 판별하지 못함 다른 코드 사용해야함_테스트 통과못함쓰 ㅜ

console.log(solution("a234"))
console.log(solution("1234"))

// 문자열이 오직 숫자로만 이루어져 있는지 확인

function solution(s) {
    return (s.length===4 || s.length===6)&& /^[0-9]+$/.test(s);
}

