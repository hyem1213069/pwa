// 순대로 담은 배열을 return 하도록solution 함수를 완성해 보세요
/*money reswert
5,500 [1,0];
15.000 [2,4000]
*/

function  solution(money) {
    var answer = []; //answer[count,남은돈]
    var price=5500; // 한잔의 가격
    var count = 0; // 주문한 잔의 수
while(true) {
    if(money < price*count) {
        answer[0] = count - 1;
        answer [1] = money-(price*(count-1));
        break
    }
    count ++;
    console.log (price*coumt) 
}
}

console.log(solution(5500));
console.log(solution(15000));