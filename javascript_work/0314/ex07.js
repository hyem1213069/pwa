const counter = function(){
    let num = 1;
    
    return {
        increase(){
            return ++num;
        },
        decrease(){
            return --num;
        }
    }
}();

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());