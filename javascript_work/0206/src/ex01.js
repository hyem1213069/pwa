//머쓱이네 slice n
// 7 10 2
// 4 12 3
// 4 12 3
// parseInt

// var a=4.14;
// console.log(parseInt(a));
// console.log(Math.ceil(a));

function solution(slice, n) {
    // console.log(slice);
    // console.log(n);

    var res = n/slice;
    res = Math.ceil(res);
    console.log(`res=${res}`);
    return res;
}

const result = solution(7, 10);
console.log(`result=${result}`);
