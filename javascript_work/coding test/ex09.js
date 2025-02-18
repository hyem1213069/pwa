function solution(dot) {
    let [x,y]= dot;

    //논리연산자 &&사용
    if(x>0 && y>0) return 1; // x 좌표와 y 좌표가 모두 양수
    if(x<0 && y>0) return 2; // x 좌표가 음수, y 좌표가 양수
    if(x<0 && y<0) return 3; // x 좌표와 y 좌표가 모두 음수
    if(x>0 && y<0) return 4; // x 좌표가 양수, y 좌표가 음수
}

console.log(solution([3,2]));
console.log(solution([-3,2]));
console.log(solution([-3,-2]));
console.log(solution([3,-2]));
