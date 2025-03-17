//양고치 n 12000원 음료수 k 2000원
//n k 임의의 숫자
//양꼬치 10개 먹으면 음료수 한개 꽁짜

function solution(n, k) {
    var total = 0;

    //12000원 곱하기 n 하면 양꼬치값
    var 양꼬치값 = n*12000;
    //2000원 곱하기 k 하면 음료수값
    var 음료수값 = k*2000;

    // 양꼬치값 + 음료수값 = total
    total= 양꼬치값 + 음료수값;
    // 양꼬치 10개 할 때 마다 2000원씩 뺴기
    total = total - parseInt(n/10)*2000;

    return total;
}

const value1 = solution(10,3);
console.log(value1);//124,000

const value2 = solution(64,6);
console.log(value2);//768,000

// ---------------------------gpt풀이

function solution(s) {
    let answer = [];
    let lastSeen = {}; // 문자의 마지막 위치 저장

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (lastSeen[char] !== undefined) {
            answer.push(i - lastSeen[char]); // 이전 위치랑 현재 위치 차이 계산
        } else {
            answer.push(-1); // 처음 나온 문자는 -1
        }

        lastSeen[char] = i; // 현재 위치 저장
    }

    return answer;
}

console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]