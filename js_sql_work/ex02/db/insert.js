const { error } = require('console');
const mysql = require('mysql2');

// console.log(mysql);

const dbInfo={
    host: '192.168.0.92',
    user: 'root',
    password: 'rootpassword',
    database: 'hm'
}

const connection = mysql.createConnection(dbInfo);
// console.log(connection);

// db 연결 시작
connection.connect();

const sql = 'insert into people (person_name,age) values(?,?)';
const values = ['홍길동',30];

connection.query(sql, values,(error,result)=>{
    if(error) throw error;
    console.log(result);
})

// db 연결 끊기
connection.end();