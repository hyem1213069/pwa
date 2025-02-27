function aa(){
    // console.log(this);
    console.log(new.target);
}

// 일반함수 호출일때는 전역객체 출력된다. window global
aa();
console.log('-------------------------------------')
// this {} 입니다.
new aa();