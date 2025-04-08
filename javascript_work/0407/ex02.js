console.log(new Date());
console.log(new Date(2025.,.5));

const now = new Date( );
console.log (now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());

now.setMonth(2);// ???2월을 설정하면 0,12,2 이렇기때문에 3월로됨
console.log(now);

// 2월 28..? 윤년...4년마다 100년 2월28일..2월29일..
now.setDate(0); //전달에 마지막 날 구하기
console.log(now);

console.log(Date.now()); // 이것은 UTC 시간
console.log(new Date(Date.now())); // UTC 시간으로 변환
console.log(new Date());

console.log(now.toLocaleDateString()); 
console.log(now.toLocaleTimeString()); 
console.log(now.toLocaleString()); 

const myDate = `${now.getFullYear()}/
${now.getMonth()+1}/
${now.getDate()}`;
console.log(myDate);
