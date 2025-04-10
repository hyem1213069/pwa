//es5 2014
//es6 2015
const arr = [1, 2, 3];
// const brr = arr.slice(); // 얕은복사 
const brr = arr.slice(); 

arr[0] = 20;
console.log(arr);
console.log(brr); 