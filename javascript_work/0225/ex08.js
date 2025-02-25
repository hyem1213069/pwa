function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2* this.radius;
    }
}

const circle1 = new Circle(5); // 반환되는 값
const circle2 = new Circle(10); // 자동으로 {}

console.log(circle1);
console.log(circle2);
console.log(circle1.getDiameter());
console.log(circle2.getDiameter());

// const circle = new Circls(5)