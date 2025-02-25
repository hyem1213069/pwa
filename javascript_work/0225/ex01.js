function solution(n) {

    // n = String(n)
    n = n + '';
    // n = n.toString()

    // forEach map filter reduce
    const arr = n.split('');
    console.log(arr)

    const brr = arr.map (item => Number(item));
    console.log(brr)
 
    const sum = brr.reduce((a,b)=> {

    })
    return sum;
}
// 1234 =>10
// 5631 => 5+6+3+1 = 15
// 11021 => 1+1+10+2+1=15

const ret = solution(1234);
console.log(ret);