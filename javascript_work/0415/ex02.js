// map은 키값이 같으면 덮어씌워진다
const map = new Map();
// map은 키와 값의 쌍으로 이루워 진다
map.set("Key1", "value1");
map.set("Key1", "aaaa");
console.log(map);

// 속성값이 같으면 덮어씌워진다
const obj = { aa: 10 };
obj.aa = 20;
console.log(obj);

// for of 구문은 Symbol.iterator가 구현되어져 있어서 정상작동되고
// 키와 값이 배열로 출력된다.
for (const element of map) {
  console.log(element);
}
map.forEach((value,key)=>{
    console.log(`key ${key}`);
    console.log(`value ${value}`);
})
