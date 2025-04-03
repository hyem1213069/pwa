// 숫자로 이루어져 있는지 확인

const isDigit = (str)=> /^\d+$/.test(str);

console.log(isDigit("1234"));
console.log(isDigit("abcd"));
console.log(isDigit("12cd"));


// 문자로 시작하는지 확인
const isStartString = (str)=> /^\[A-Za-z]/.test(str);

console.log(isStartString('abc123'));
console.log(isStartString('123abc'));

// 정규표현식은 문자열을 검사하는 패턴을 정의하는 방법이다.
// 제어문 -> 함수 -> 클래스

const isValidEmail = email => /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);

if (!isValidEmail('aa@naver.com')){
    alert('다시 입력하세요');
}