// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다.
// 예를 들면 다음과 같습니다.
// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을
// return하는 solution 함수를 완성해 주세요.
// 단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.

function solution(a, b) {
    let ab = Number(String(a) + String(b));
    let ab2 = 2*a*b;

    if(ab >ab2){
        return ab;
    } else {
        return ab2;
    }
}

console.log(solution(2, 91)); 