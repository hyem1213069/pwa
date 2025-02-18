function doprint1(name, age, gender, hegit, width){
    console.log("nmae"+name);
    console.log("age"+age);
    console.log("gender"+gender);
    console.log("hegith"+hegit);
    console.log("width"+width);
}
doprint1('홍길동',20,'남자','180','65');

const person = {
    name : "홍길동",
    age : 30,
    gender : '남자',
    hegit : 190,
    width : 80
}

function doprint2(person) {
    console.log ("name" + person.name);
    console.log ("age" + person.age);
    console.log ("gender" + person.gender);
    console.log ("hegith" + person.hegit);
    console.log ("width" + person.width);
}

doprint2(person);