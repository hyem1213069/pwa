function solution(my_string) {
    let a = ''; // 빈 문자열 초기화

    // 문자열을 뒤에서부터 하나씩 추가
    // for (초기값; 조건; 증감) {반복할 코드}
    // 반복횟수가 정해진 경우 일정한 범위를 돌 때 사용

    for (let i = my_string.length -1; i>=0; i--){
        a += my_string[i];
    }
    
    return a;
}

console.log(solution("jaron"))
console.log(solution("bread"))