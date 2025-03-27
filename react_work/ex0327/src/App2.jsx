import React, { useState } from 'react'
import DD from './components/DD'

function App2() {
    const [count, setCount] = useState(0);
    console.log("App2 랜더링됨")

    const style = {
        border : "1px solid rgb(131, 16, 16)",
        borderRadius : '20px',
        padding : '20px',
        color: "rgb(30,30,30)",
        backgroundColor : 'rgb(248, 160, 160)'
    }

    // ctrl + d 같은 문자 선택
    // ctrl + e 다른파일로변경

    return (
        <>
            <button onClick={() => { setCount(count + 1); }}>랜더링 이루어짐</button>
            <div>
                <h1>App1</h1>
            </div>
            <DD style={style}>
                <h1>자식태그111</h1>
                <p>accusamus autem animi alias iusto quia!</p>
            </DD>
            <DD style={style}>
                <h1>자식태그222</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </DD>
            <DD style={style}>
                <h1>자식태그333</h1>
                <p>Cumque, eaque veniam dignissimos in nisi natus obcaecati</p>
            </DD>
        </>
    )
}

export default App2
