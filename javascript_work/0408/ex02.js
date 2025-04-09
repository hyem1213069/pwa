const ss = Symbol();
if(ss){
    console.log("symbol 트루");
}

const aa = "asd";
const bb = "";

if(aa) {
    console.log("aa는 트루");
}

if(bb) {
    console.log("bb는 트루");
}

const cc = {};
if(cc) {
    console.log("빈객체 트루");
}

const dd = cc||"false면 dd";
console.log(dd);