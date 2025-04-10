const arr = [1, 2, 3, 4, 5];

console.log(Math.max(arr));
console.log(Math.max(...arr));

// Function.prototype
// apply(this, 파라매타배열)
// call(this, 스프래 배열)
// bind 함수호출 this 정의할 수 있는거

const apMax = Math.max.apply(null, arr);
console.log(apMax);

const caMax = Math.max.call(null, arr);
console.log(caMax);

const caMax2 = Math.max.call(null, 1,2,3,4,5);
console.log(caMax2);