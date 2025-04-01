import React, {useState,useEffect} from 'react'

function Counter() {
    const [count, setCount] = useState(()=>{
        const saved = sessionStorage.getItem('count');
        return saved? parseInt(saved) : 0;
    });

    useEffect(()=>{
        sessionStorage.setItem('count', count);
    }, [count]);

  return (
    <div>
    <h1>클릭카운트세기</h1>
    <h3>count : {count} </h3>
    <button onClick={()=>setCount(count+1)}>증가</button>  
    <button onClick={()=>setCount(count-1)}>감소</button>
    <button onClick={()=>setCount(0)}>리셋</button>    
    </div>
  )
}

export default Counter
