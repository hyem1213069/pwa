const supabaseUrl = "https://fbyyywjwttfrtfjhndsz.supabase.co";
const supabaseAnonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZieXl5d2p3dHRmcnRmamhuZHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNzQyODEsImV4cCI6MjA1Nzg1MDI4MX0.Wuo7WrAEA-sEvfx5iwxzy3oyQ4UxDCHnaeSZKfd_86g";

const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonkey);

document.getElementById('sign').addEventListener("click", async function() {
    const $email = document.getElementById('email').value;
    const $password = document.getElementById('password').value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //$email안에 있는 변수가 email형식이 맞으면 true, 아니면 false
    const result = emailRegex.test($email);
    if (!result) {
        alert('email형식이 아닙니다.')
        return;
    }
    
    // this.disabled = false;
    this.innerHTML="회원가입중...";

    const res = await supabase.auth.signUp({ email: $email, password: $password });
    if(res.error){
        alert("에러발생", res.error)
    }else{
        alert("회원가입되었습니다. 이메일 인증 후 로그인하세요")
        this.innerHTML="회원가입";
    }
});

document.getElementById('login').addEventListener("click", async () => {
    const $email = document.getElementById('email').value;
    const $password = document.getElementById('password').value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //$email안에 있는 변수가 email형식이 맞으면 true, 아니면 false
    const result = emailRegex.test($email);
    if (!result) {
        alert('email형식이 아닙니다.')
        return;
    }
    
    // this.disabled = false;

    const res = await supabase.auth.signInWithPassword({ email: $email, password: $password });
    if(res.error){
        alert("에러발생", res.error)
    }else{
        alert("로그인되었습니다")
    }
});

document.getElementById("logout").addEventListener("click", async () => {
    alert('logout');
});

document.addEventListener('DOMContentLoaded', async function () {
    const res = await supabase.auth.getUser();
    console.log(res);

    const $loginStatus = document.getElementById('login-status');
    $loginStatus.innerHTML=`로그인됨 ${res.data.user.email}`;
})