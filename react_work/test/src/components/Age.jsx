import React, {useState} from 'react'

function Age() {
    const [birth, setBirth] = useState('');
    const [age,setAge] = useState(null);

    const handAge = () => {
        const birthDate = Number(birth.split('-')[0]);
        const thisYear = 2025;
        const result = thisYear - birthDate;
        setAge(result);
    };

  return (
    <div>
      <h1>나이계산기</h1>
      <input type="date"
      value={birth}
      onChange={(e)=>setBirth(e.target.value)}
       />
        <button onClick={handAge}>나이계산</button>
        {age !== null && <h3>당신의 나이는 {age}세 입니다.</h3>}
    </div>
  );
}

export default Age
