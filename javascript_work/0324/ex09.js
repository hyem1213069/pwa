// res.data.user.id
// supabase. auth. getUser();
// 데이터가 없으면
const res = {
    data: null,
    // } 
    // user:{
    //     id: '1020320'
    // }
    // }
}
function doA(res){
    console.log(res.data?.user?.id);
    console.log("정상종료");

    // if(underfined) {
    // innerhtml='로그인안댐'}
    // }
}
doA({});