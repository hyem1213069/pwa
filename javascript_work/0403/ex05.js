// front 에서는 back서버에서 만들어준걸 사용한다

fetch('https://jsonplaceholder.typicode.com/todos')
.then(result => {
    // console.log(result);
    if(String(result.status).startsWith('2')){
        console.log('정상');
        return result.json();
    }else{
        console.log('주소 잘못됐음'+ result.status);
        throw new Error('에러임더');
    }
})
.then(json => {
    console.log('요와바라');
    // console.log(json);
})
.catch(e=>{
    console.log('절로가라');
    console.log(e);
})