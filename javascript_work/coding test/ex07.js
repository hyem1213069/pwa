function solution(num_list) {
    let num1 = 0
    let num2 = 0;

    //반복문 : num_list 안에 let num을 반복하라//
    for (let num of num_list) {
        // 만약에 num이 짝수일 경우 num1을 1증가
        if (num % 2 === 0) {
            num1++;
        // 아니면(홀수일 경우) num2를 1씩증가
        } else {
            num2++;
        }
    }

    return [num1, num2];
}
console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,5,7]));

// 4%2
// 4/2==2
// 나머지 ==온전히 나눠진 2를 제외한 값

// 5%2

// 5/2==2.5
// 나머지는 온전히 나눠진 2를 제외했을때 남는 값

// 2*2=4
// 5-4 ==1
// 5%2 == 1

//------------------나머지값 구하기 예제
// let A= a % b;
// console.log(10 % 3); // 1 (10을 3으로 나누면 몫은 3, 나머지는 1)
// console.log(15 % 4); // 3 (15을 4로 나누면 몫은 3, 나머지는 3)
// console.log(20 % 7); // 6 (20을 7로 나누면 몫은 2, 나머지는 6)