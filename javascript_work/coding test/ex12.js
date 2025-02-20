// str1(큰 문자열) 안에 str2(찾고 싶은 문자열)가 있는지 확인
// split(str2)로 str1을 str2 기준으로 나눈다.
// 만약 나뉜 조각이 여러 개면(length > 1) 1 반환!
// (즉, str2가 들어있음)
// 나뉜 조각이 하나뿐이면 2 반환! (즉, str2가 없음)

function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o","6CD"	))