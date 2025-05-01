new Error("에러생성"); // 에러객체를 생성만 했을 때는 예외 이벤트 실행 X

try {}
throw new Error("에러생성") // 여기에서 강제종료
chatch (e) {
    console.log(e)
}
// console.log("종료되었습니다.")