var a = 'cat';
var b = 'dog';

console.log(Boolean(a));
console.log(a||b);
console.log(); //줄바꿈//

// var c = a && b;
// var d = a || b;
//
// console.log(c);
// console.log(d);

var c;
if (a){
    c = b;
}

console.log(`Boolean('') ${Boolean('')}`);
console.log(`Boolean([]) ${Boolean([])}`);
console.log(`Boolean({}) ${Boolean({})}`);
