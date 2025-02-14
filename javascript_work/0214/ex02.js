// 2 7
// 2*2*2*2

// 3*5
//3*3*3*3

function solution(n,t){
    var answer = n;
    for(let i=0; i<t; i++) {
        answer = answer*2;
    }
    return answer;
}

console.log(solution(2,7));
console.log(solution(3,5));
