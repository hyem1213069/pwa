/*
1. 저녁에서 this
2. 일반함수에서 this
   일반모드
   스트릭트모드 ㅡ> packgae.hsib tyoe:moudule 자동으로 strict모두이다
3. 메서드에서 this
4. 생성자에서읠 this

효율을 높이는 방법
1. 집중력
2. 간절함
*/
// 전역에서 this
// 'user strict';

// console.log(this);
// function aa(){
//     console.log(this);
//     console.log(this.crypto.randomUUID());
// }

// aa();

// aa();
// 3 메서드에서 this
// const obj = {
//     a:10,
//     doa(){
//         console.log(this);
//         console.log(`a ${this.a}`);
//     }
// }

// obj.doa();

// 옛날방식 javascript 에서 이방식 좋아함

function aaa(){
    console.log(this);
    this.name = "마이네임";
    return this;
}

const a1 = new aaa();
console.log(a1);

class AA{
    constructor(){
        console.log(this);
        this.name = "마이클래스네임";

        // return this; 생략되어진 문법
        // return {a:10,b:20}
        return this;
}
}

const a2= new AA();
console.log(a2);