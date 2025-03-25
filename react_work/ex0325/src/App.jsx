import { useState } from 'react';
import './App.css';
import User from './user';
import Textinput from './Textinput';

// function doA(item) {
//   return [item, function() {}]
// }
// prettier (자동세미콜론입력)
function App() {
  // const [a, seA]= doA(10);
  // count 변수는 useState를 사용했기 때문에 setCounter 값을 변경할 시 화면 재세팅
  
  const [count, setCount] = useState(0);
  // 일반변수이기때문에 화면 변경이 없음
  let test = 0;

  // 이것도 일반변수
  const [mystyle, mm] = useState({ border: '1px solid black'});
  // const $h1 = document.getElementById('test-h1');
  // $h1.innerHTML="변경"

  const func = ()=>{
    test = 20;
    console.log(test);
    setCount(count + 20);
  
    mm({border: '1px solid black', backgroundColor: `rgb(100, 200,${count})`});
  
  };

  return (
    <>
    <Textinput/>
    <User/>
    <h1>count = {count}</h1>
    <h1 id='test-h1'>test = {test}</h1>
    <button style={mystyle} onClick={func}>누름</button> 
    </>
  )
}

export default App
