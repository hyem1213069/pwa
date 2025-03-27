import React from 'react'
import CC from './components/CC'

function App1() {

    const [style, setStyle] = useState({
        border : "1px solid rgb(131, 16, 16)",
        borderRadius : '20px',
        padding : '20px',
        color: "rgb(30,30,30)",
        backgroundColor : 'rgb(255, 182, 182)'
    })
    

    return (

    <>
    <div>
      <h1>App1</h1>
      <button onClick={()=>setStyle({...style,color:"red"})}>빨간색으로</button>
      <button onClick={()=>setStyle({...style,color:"blue"})}>파란색으로</button>
      <button onClick={()=>setStyle({...style,color:"white"})}>하얀색으로</button>
    </div>
    <CC style={style}>
        <h1>자식태그111</h1>
        <p>accusamus autem animi alias iusto quia!</p>
    </CC>
    <CC style={style}>
        <h1>자식태그222</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </CC>
    <CC style={style}>
        <h1>자식태그333</h1>
        <p>Cumque, eaque veniam dignissimos in nisi natus obcaecati</p>
    </CC>
    </>
  )
}

export default App1
