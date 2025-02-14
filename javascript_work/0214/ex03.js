function solution(mystring, letter) {
    var answer = '';
    for (let i = 0; i< mystring.length; i++){
        // mystring[i]와 letter가 다르면 더해서 answer 넣고
        if (mystring[i] !==letter)
        answer = answer + mystring[i];
    // 같으면 더해서 answer 넣는거 하지않음
    }
    return answer;

}

console.log(solution('abcdef,f')); // ->abcde
// solution('qwerqwer,w') // ->qerqer

// 문자열은 유사 배열입니다.

// var a = "abcd";
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);

// a[2] = 'f';
// console.log(a);