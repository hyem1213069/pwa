const arr = [1,2,3,4,5];
   const result = arr.reduce((a,b,index,values)=> {
    console.log(`a=${a} b=${b}= index=${index} values=${values}`)
    return a+b;
});

console.log(`result = ${result}`);

// 정렬
// sort
// 반환값없음 수행
// forEach 변환값음 수행
// filter true false 매일 반환
// map 요서 변경해서 반환
// teduce 하나의 값으로 변경해서 반환