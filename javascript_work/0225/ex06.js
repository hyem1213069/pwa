const circle1 = {
    radius: 5,
    getDiamaeter(){
        return 2 * this.radius
    }
}

const circle2 = {
    radius : 10,
    getDiamaeter() {
        return 2 * this.radius;
    }
}

console.log(circle1.getDiamaeter());
console.log(circle2.getDiamaeter());