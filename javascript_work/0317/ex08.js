function outer(){
    let a = 0;
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("done" + (a++)),1000); 
    });
}

const res = outer();
console.log(res);