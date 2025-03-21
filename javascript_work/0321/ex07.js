const aa = (x, y) => ({ x, y }) // -> { return { x, y }  };

const result = aa(10, 20);
console.log(result);

// filter return true false item 반환
// map 내마음대로 반환가능

const arr = [{ name: 'LEE' },
             { name: 'KIM' },
             { name: 'PARK' }]
    .map((item, index, arr) => {
        console.log(`item = ${JSON.stringify(item)}`);
        console.log(`index = ${index}`);
        console.log(`arr = ${arr}`);
        return `<div>name = ${item.name}</div>`;
    });

console.log(arr);