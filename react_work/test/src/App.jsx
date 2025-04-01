import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Age from './components/age'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h3 style={{color:'rgb(255, 145, 0)'}}>카운터증가감소</h3>
        <Counter/>
        <hr />
        <h3 style={{color:'rgb(0, 81, 255)'}}>나이세기</h3>
        <Age/>
      </div>
    </>
  )
}

export default App
