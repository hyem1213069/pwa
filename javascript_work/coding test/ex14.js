function solution(bin1, bin2) {
    const arr = bin1.split('');
    const brr = bin2.split('');

    let num1 = 0;
    for (let i = arr.length - 1, j = 0; i > -1; i--, j++) {
        num1 += arr[i] * (2 ** j);
    }
    console.log(`10진수로 num1 = ${num1}`);

    let num2 = 0;
    for (let i = brr.length - 1, j = 0; i > -1; i--, j++) {
        num2 += brr[i] * (2 ** j);
    }
    console.log(`10진수로 num2 = ${num2}`);

    let result = num1 + num2;
    console.log(`result = ${result}`);

    let mod = '';

    do {
        mod = result % 2 + mod;
        result = Math.floor(result / 2);
    } while (result > 1);

    console.log(`result = ${result}`);
    console.log(`mod = ${mod}`);
    var answer = result + mod;
    if(bin1 === '0' && bin2 === '0')
        answer = '0';
    return answer;
}

const ret = solution('1011', '11');
console.log(ret);

//------------------------------------핏티 풀이

// function solution(bin1, bin2) {
//     // 1️⃣ 이진수를 10진수로 변환
//     const num1 = parseInt(bin1, 2);
//     const num2 = parseInt(bin2, 2);

//     console.log(`10진수 변환: num1 = ${num1}, num2 = ${num2}`);

//     // 2️⃣ 10진수 덧셈 수행
//     const result = num1 + num2;
//     console.log(`10진수 합: ${result}`);

//     // 3️⃣ 다시 2진수로 변환 (toString(2))
//     const binaryResult = result.toString(2);
//     console.log(`2진수 변환: ${binaryResult}`);

//     return binaryResult;
// }

// // 테스트 실행
// const ret = solution('1011', '11');
// console.log(`최종 결과: ${ret}`);