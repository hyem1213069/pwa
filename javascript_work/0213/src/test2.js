function solution(my_string, letter) {
    var answer = '';
    return my_string.split(letter).join('');
}

console.log(solution("abcdef", "f"));
console.log(solution("BCBabe", "B"));


// split : 특정문자를 기준으로 문자열 나누기
// join : 나눠진 문자열 다시 합치기