function solution(arr) {
    const stk = [];

    for (const num of arr) {  // ✅ for문 대신 for...of 사용 (더 직관적)
        if (stk.length && stk[stk.length - 1] === num) stk.pop();
        else stk.push(num);
    }

    return stk.length ? stk : [-1];  // ✅ 한 줄로 반환 처리
}

console.log(solution([0, 1, 1, 1, 0]))