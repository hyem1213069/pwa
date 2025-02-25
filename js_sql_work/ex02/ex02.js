const { error } = require('console');
const mysql = require('mysql2');

// console.log(mysql);

const dbInfo={
    host: '192.168.0.92',
    user: 'root',
    password: 'rootpassword',
    database: 'hm'
}

mysql.createConnection(dbInfo);

const connection = mysql.createConnection(dbInfo);
// console.log(connection);

// db 연결 시작
connection.connect();
connection.query('select*from people',(error,result,fields)=>{
    if(error) throw error;
    console.log(result);
})

// db 연결 끊기
connection.end();