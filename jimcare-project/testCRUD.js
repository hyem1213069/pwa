var x = 10;

function add(x, y) {
    return x*y
}
// INSERT
// await 슈파베이스에서 가서 insert 하는거 끝날때 까지 기다려라
// await 사용하면 async 써야댐

//float left overflow hidden 겹치는거 해결해야댐

async function insertData(dbCon){
    await dbCon.from('test').insert([{comment :'내가 insert해야지', writer: '어쩌구저쩌구'}])

}

async function selectData(dbCon){
    const res = await dbCon.from('test').select('*');
    console.log(res);
    return res.data;
}