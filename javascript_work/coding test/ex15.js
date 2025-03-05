function solution(my_str, n) {
    var answer = [];

    for(let i=0; i<my_str.length; i+=n){
        let alp = my_str.slice(i, i+n);
        answer.push(alp);
    }
    return answer;
}

console.log(solution("abc1Addfggg4556b",6));
console.log(solution("abcdef123",3));