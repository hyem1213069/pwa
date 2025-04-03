import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { signUp } from "../jslib/supa";
import Swal from "sweetalert2";

function User() {
const {userId} = useParams();
console.log(userId);

useEffect(() => {
    // 이게되면 마이페이지 띄워주고
    // 안되면 로그인하는 페이지로 이동해야함
    supabase.auth.getUser();
},[])
  
const sign = async() => {
    const {data,error} = await signUp('skfn321@naver.com','goaWkd!993')
    Swal.fire({
        title: `${data}`,
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      });
};
 
return (
  <>
  <div>User</div>
  <button onClick={sign}>회원가입</button>
  </>
);

}

export default User;
