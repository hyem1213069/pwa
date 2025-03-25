import { useState } from "react";

function User(){
    const [user, setUser] = useState({name: "홍길동", age:20});
    
    user.age = 26;

    // javascript문법 원시값들은 값에의 참조
    // 객체값들은 창조값에 의해 변경

    // setUser() => 화면재랜더링 User()새로호출..무한루프
    const addAge = () => { setUser({...user, age: user.age+1})};

    return (
    <>
    <h1>유저</h1>
    <h2>이름 = {user.name}</h2>
    <h2>나이 = {user.age}</h2>
    <button onClick={addAge}>나이증가</button>
    </>
    );
}

export default User;