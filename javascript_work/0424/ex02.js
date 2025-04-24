function doA(){
    console.log("doA")
    doB()
}
function doB(){
    console.log("doB");
}
console.log("시작")

setTimeout(doA,300)
doB();

console.log("종료")