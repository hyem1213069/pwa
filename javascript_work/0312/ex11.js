const person = {
    name : 'lee',
    getName() {
        return this.name;
    }
}

// console.log(person.getName());

const alPerson = {
    name : 'kim'
}

alPerson.getName = person.getName;
console.log(alPerson.getName());

const cc = person.getName;
console.log('일반함수로 호출될 때는 this가 전역객체' + cc());