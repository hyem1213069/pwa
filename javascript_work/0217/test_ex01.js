// 'abc' 5
// aaaaabbbbbccccc

// abc 2
// aa bb cc

// str abc
// numer 3
// return aaabbbccc{}


function solution(my_string, n) {
    var result = "";

    for (var i=0; i < my_string.length; i++) {  
        for (var a=0; a < n;a++ )
            result +=my_string[i];
    }

    return result;
}

//--------------------------------------------------강사님 풀이

function solution(str,number) {
    let answer='';
    for (let i = 0; i < str.length; i++) {
     for (let j = 0; j < number; j++) {
        answer = answer + str[i];
    }
}
return answer;
}

const res = solution('abc',3);
console.log(res);