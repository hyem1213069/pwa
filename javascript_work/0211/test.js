function solution(numbers) {
    return numbers[0] * numbers[1];
    numbers.sort((a, b) => b - a);
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([0, 31, 24, 10, 1, 9]));