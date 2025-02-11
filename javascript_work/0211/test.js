// function solution(numbers) {
//     return numbers[0] * numbers[1];
//     numbers.sort((a, b) => b - a);
// }
//
// console.log(solution([1, 2, 3, 4, 5]));
// console.log(solution([0, 31, 24, 10, 1, 9]));
//

const a = [1,50,100,70,10,200];

const answer = a[0];
for (let i = 0; i < a.length; i++) {
    // console.log(a[i]);
    if (answer < a[i]) {
        answer = a[i];
    }
}
console.log(answer);

const ret = Math.max(...a);
console.log(ret);

console.log(a);
console.log(...a);

const [k,y,y,z,qq] = [...a];
console.log(k);
console.log(z);
console.log(z);