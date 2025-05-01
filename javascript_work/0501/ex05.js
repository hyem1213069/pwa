async function foo() {
    try {
      // fetch 첫 반환값은 통신 성공 여부
      const result = await fetch(
        'https://609e0571f1a52874cde2b14.mockapi.io/todos/1'
      );
      const body = await result.json();
      console.log(body);
    } catch (e) {
      console.log(e)
    }
  }
  
  console.log("함수종료");
  
  foo();
  
  console.log("종료되었습니다");
  