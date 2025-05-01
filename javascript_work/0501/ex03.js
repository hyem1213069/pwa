// 0,1,1,2,3,5,8
// const infinityFibona = (function () {
//   let [pre, cur] = [0, 1];
//     return {
//     [Symbol.iterator]() {
//       return this;
//     },
//     next() {
//         [pre, cur] = [ cur, pre+cur]
//       return { value: cur };
//     },
//   };
// })();

// 제네레이터 함수는 암묵적으로 객체리턴한다

const infinityFibona = (function* () {
    let [pre, cur] = [0, 1];
    while (true) {
        [pre, cur] = [cur, pre + cur];
        yield cur;
    }
})();


for ( const num of infinityFibona) {
    if(num>10000) break;
    console.log(num);
}

// console.log(infinityFibona);
// console.log(infinityFibona.next());
// console.log(infinityFibona.next());
// console.log(infinityFibona.next());
// console.log(infinityFibona.next());
