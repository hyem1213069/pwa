const base = {
    sayHi(){
        console.log("base sayHi 함수");
    }
}

const derived = {
    __proto__: base,
    sayHi() {
        super.sayHi();
        console.log("derived sayHi 함수");
    },
    // 화살표 함수와 일반함수에서는 super 사용 X
    arrow:()=>{
        // super.sayHi();
    }
}

derived.sayHi();
// derived.arrow();