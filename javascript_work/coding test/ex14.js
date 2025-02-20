function solution(numbers) {
    var answer = [];
    for (var i=0; i<numbers.legnth; i++ ) {
        answer.push(numbers[i]*2);
    }

    return answer;
}

console.log (solution([1, 2, 3, 4, 5]));