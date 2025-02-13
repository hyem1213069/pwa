const circle = {
    radius: 5,
    getDiameter: function (){
        return 2 * this.radius;
    }
}

console.log(circle);
console.log(circle.getDiameter);
console.log(circle.getDiameter());

var percon  = {
    name : "John",
}

var name = "name"

console.log(percon.name);
console.log(percon[name]);
