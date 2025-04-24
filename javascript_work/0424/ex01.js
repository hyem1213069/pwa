// module import from
// commonjs require
const lodash = require('lodash');

const {debounce,throttle} = lodash;

// console.log(lodash.debounce);
// console.log(lodash.throttle);
// 디바운스 함수 이벤트가 발생해도 0.3초(300밀리초)만에 1번만 실행된다

const aa = debounce(()=>{
    console.log('debounce')
},300)

aa();
aa();
aa();
aa();


// 디바운스랑 비슷한데 쓰로틀은 디바운스보다는 좀 더 여러번 발생한다
const bb = throttle(()=>{
    console.log("throttle");
},300);

bb();
bb();
bb();
bb();