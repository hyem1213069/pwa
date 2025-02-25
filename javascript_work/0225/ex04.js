function deepFreeze(target){
    
    // target이 객체이고 freesze되지 않은 객체만 freeze한다
    if(target && typeof target === 'object'&&!Object.isFrozen(target)) {
        Object.freeze(target);

        Object.keys(target).forEach(key => {
            deepFreeze(target[key]);
        });
    }
    return target;
}

const person = {
    name : 'lee', 
    addr: {city:'seoul'},
    friends : {name: 'Park', addr:{city:"busan"}}
};

deepFreeze(person);

person.addr.city ='busan';
console.log(person);


// 추가 X 삭제 O 프로퍼티 값 변경O
// Object.preventExtensions(person)

// 추가 X 삭제 X 프로퍼티 값 변경 O
// configuable.false
// Object.seal(person);

// 추가 X 삭제X 프로퍼티 값 변경 X
// writable false; configuable:false
// Object.freeze(person);
// Object.freeze(person.addr);
// Object.freeze(person.friends.addr);
// person.addr.city='busan';
// console.log(person);

//무시된다
// person.age = 20;
// console.log(person);

// person.name = "Park";
// console.log(person);

// const ret = Object.isExtensible(person);
// console.log(ret);