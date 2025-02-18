// 1/2 + 3/4 = 5/4
// 10/20 + 5/10 = 30/20 => 15/10 => 3/2

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];

    // 8,9 = 72
    var max = denom1 * denom2;
    var 통분분모 = 2;

    // 1 <= 72

    while (통분분모 <= max) {
        if ( 통분분모 % denom1 == 0 && 통분분모 % denom2 == 0) {
            console.log(통분분모);
            break;
        }
        통분분모++;
    }

    return answer;
}

// solution(1, 2, 3, 4);
solution(10, 20, 5, 10);

//-----------------------------------------gpt풀이

function solution(numer1, denom1, numer2, denom2) {
    let lcm = (denom1 * denom2) / gcd(denom1, denom2);

    let newNumer1 = numer1 * (lcm / denom1);
    let newNumer2 = numer2 * (lcm / denom2);

    let sumNumer = newNumer1 + newNumer2;

    let commonDivisor = gcd(sumNumer, lcm);

    return [sumNumer / commonDivisor, lcm / commonDivisor];
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}