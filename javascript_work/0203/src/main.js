console.log("hello world!");

// var userId = "홍길동";
// var userAge = 10;
//
// var userId2 = "박길동";
// var userAge2 = 20;

console.log(users);
// var users = 10;

var users = [
  { userId: "홍길동", userAge: 10 },
  { userId: "박길동", userAge: 20 }
];

console.log(users);

var printUsers1 = `user[0] = Id = ${users[0].userId}, Age = ${users[0].userAge}`;
var printUsers2 = `user[1] = Id = ${users[1].userId}, Age = ${users[1].userAge}`;

document.getElementById("app").innerHTML = printUsers1 + printUsers2;

var b;