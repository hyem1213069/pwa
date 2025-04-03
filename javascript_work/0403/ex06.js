const str="ab_cd_ef";

console.log(str.substring(1,4));
console.log(str.slice(1,4));
// substring=slice 두개 동일함 -> slice를 더 많이씀

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const aa = "  bb  ";
console.log(aa);
console.log(aa.trim());

// i대소문자 구분없이 g모든곳에서  m여러라인
const cc = " a b c d e f";
console.log(cc.replace(/\s/g,''));