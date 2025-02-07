const a = "큰따옴표안에\'작은따옴표\'";

console.log(a);

const b= '작은따옴표안에 "큰따옴표"';
console.log(b);

const c =`a=${a}+b=${b}`;
console.log(c);

const d ="a="+a +"\n\n b="+b;
console.log(d);

// f2 에러 찾아가기
// (드래그 후)ctrl + alt l 자동정렬
// alt + 1 <<왼쪽 탐색기영역으로
// alt + f12 터미널가기
// esc 에디션 창으로 가기
// alt + insert 파일생성
// \ 줄바꿈