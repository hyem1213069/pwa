const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
  });

// promise 객체
// const res = await supabase.strage.from('ex01').upload();

//   promise.then(res => {
//     console.log(res);
//   }); // 1초 후 "Done!" 출력

// 오후 수업 console.log(res)->promise{}
const ret = promise;
console.log(ret);