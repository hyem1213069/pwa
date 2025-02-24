(function() {
    console.log("IIFE 실행됨!");
  })();  // 출력: "IIFE 실행됨!"
  
  // 매개변수가 있는 경우:
  (function(name) {
    console.log(`Hello, ${name}!`);
  })("Bob");  // 출력: "Hello, Bob!"
  // 