import React, { useState } from 'react'

export default function Textinput() {
    const [text, setText] = useState("초기값")
    const change = (event) => {
        // console.log(event)
        // 이렇게 해야지 input값 변경가능
        setText(event.target.value);
    }
    const amove = (event) => {
        // a 태그의 기본동작은 페이지 이동입니다
        // 기본동작을 막는다
        event.preventDefault();
        // 이벤트 두개 걸었으면 작동 안되게 막음
        event.stopPropagation();
        console.log("a버튼누름");
    }
    const doDiv=()=>{
        console.log("div누르면 출력됨");
    }

    // onChange useState
    return (
        <div onClick={doDiv}>
            <h1>TextInput</h1>
            <input value={text} onChange={change} />
            <a href="https://www.naver.com/"onClick={amove}>이동</a>
        </div>
    )
}
