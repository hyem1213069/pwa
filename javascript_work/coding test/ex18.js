function solution(my_string) {
    let countMap = {};
    
    for (let char of my_string) {
        countMap[char] = (countMap[char] || 0) + 1;
    }

    let answer = [];
    for (let i = 65; i <= 90; i++) answer.push(countMap[String.fromCharCode(i)] || 0);
    for (let i = 97; i <= 122; i++) answer.push(countMap[String.fromCharCode(i)] || 0);
    
    return answer;
}

console.log(solution("Programmers"));