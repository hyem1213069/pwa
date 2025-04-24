const xhr=new XMLHttpRequest();

xhr.open('https://dummyjson.com/todos');

xhr.send();

xhr.onreadystatechange=()=>{
    console.log('readtState 값 변경될 될 때마다 출력')
    if(xhr.status===200){
        console.log(JSON.parse(xhr.responseText));
    }
}