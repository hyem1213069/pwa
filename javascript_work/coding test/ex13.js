function solution(array, height) {
    let count = 0;
    for (let i=0; i< array.length; i++) {
        if(array[i] > height) {count++};
    }
    return count;
}
console.log(solution([149, 180, 192, 170],167));