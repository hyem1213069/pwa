
// a개 주면 b개 받을 수 있음 빈병    먹었는병
// a	     b	             n	    result
// 2	     1	             20	    19
// 3	     1	             20	    9

// 2병 1병             10 + 5 + 2 + 1 + 1 = 19
// 20 => 10병
// 10 => 5병
// 5 => 2병 + 나머지 1병
// 3 => 1병 + 나머지 1병
// 1+1병 => 1병

// 6 + 2 + 1 = 9
// 20 => 6병 + 나머지2병
// 8 => 2병 + 나머지2병
// 4=> 1병 + 나머지1병

function solution(a, b, n) {
    let sum = 0;
    while (true) {
        // n = 10, a = 4 b = 3
        // Math.floor(10 * (3/4) ) = 
        // Math.floor(10 * 0.75 ) = 7.5 => 7
        // Math.floor(10 / 4) * 3
        // 2 * 3 = 6
        // sum = sum + Math.floor(n * (b/a) );
        sum = sum + Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + n % a;
        if (n < a)
            break;
    }
    return sum;
}

console.log(solution(2, 1, 20));

// -------------------------------------------------------gpt풀이

function solution(a, b, n) {
    let sum = 0;

    while (n >= a) {
        const get = Math.floor(n / a) * b; // 이번 라운드에 받을 콜라 병 수
        sum += get;                        // 총 받은 콜라 수에 추가
        n = Math.floor(n / a) * b + (n % a); // 남은 병: 받은 콜라(=새 빈병) + 안 나눠진 나머지 빈병
    }

    return sum;
}
