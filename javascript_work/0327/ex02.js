// Array.from 함수는 lengh:3번돌린다
// max=6
// const arr = Array.from({length:6},(item,index)=>{
//     console.log(`item${item}`);
//     console.log(`index ${index}`);
//     return index +1;
// })

const arr = Array.from({length:6},(_,i) => i+1);

const arr2 = Array.from([1,2,3,4],(item,index)=>{
    console.log(`item${item}`);
    console.log(`index ${index}`);
    return 2;
})

console.log(arr);
console.log(arr);