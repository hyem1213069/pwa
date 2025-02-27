const mysql = require('mysql2');

function people_update(person_id, name, age){
    const dbInfo = {
        host : '192.168.0.92',
        user : 'root',
        password : 'rootpassword',
        database : 'hm'
    }
    const connection = mysql.createConnection(dbInfo);

    // db 연결
    connection.connect();
    const sql = "update people set person_name=?, age=? where person_id=? ";
    connection.query(sql,[name, age, person_id],(err,result)=>{
        if(err) throw err;
        console.log(`result=${result}`);
    })
    connection.end();
}
module.exports = people_update;