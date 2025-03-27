import React, { useState } from 'react'

function DD({ style, children }) {

  // setchildstyle 호출하면 화면 랜더링이 자동으로 된다.
  const [childstyle, setchildstyle] = useState(style);

  console.log("DD 랜더링됌")

  return (
    <>
      <button onClick={() => setchildstyle({ ...style, color: "Red" })}>빨간색으로</button>
      <button onClick={() => setchildstyle({ ...style, color: "blue" })}>파란색으로</button>
      <button onClick={() => setchildstyle({ ...style, color: "white" })}>하얀색으로</button>
      <div style={childstyle}>
        <div>CC</div>
        {children}
      </div>
    </>
  )
}

export default DD
