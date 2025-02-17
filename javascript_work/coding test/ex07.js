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