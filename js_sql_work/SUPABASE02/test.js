const test = [
    {
        "id": "dc54719d-807a-446c-89b5-722f6b39943b",
        "name": "Alice",
        "email": "alice@example.com",
        "created_at": "2025-03-05T06:01:58.452066", "active": true
    },
    {
        "id": "d8b9369f-dcf0-4362-9ad4-58a12f084a23",
        "name": "asdfasdf",
        "email": "Bob@naver.com",
        "created_at": "2025-03-05T06:05:19.251045",
        "active": true
    },
    {
        "id": "c4fd937b-cfe6-4ad1-adf7-6ea35b1fb64d",
        "name": "홍길동",
        "email": "hong@example.com",
        "created_at": "2025-03-06T05:34:05.558157",
        "active": true
    }, {
        "id": "2c9d8a8d-b2db-488e-821c-1aa32a0102f7",
        "name": "김철수",
        "email": "kim@example.com", "created_at": "2025-03-06T05:34:05.558157",
        "active": true
    }, {
        "id": "903726d4-4ac8-426f-b871-84f749f43c80",
        "name": "이영희",
        "email": "lee@example.com",
        "created_at": "2025-03-06T05:34:05.558157",
        "active": true
    }, {
        "id": "fcf122ab-5ff0-4e3a-a30b-0603ba972b5d",
        "name": "qqq",
        "email": "qqq@naver.com",
        "created_at": "2025-03-06T06:02:29.678321",
        "active": true
    }, {
        "id": "85f4eebf-872c-4f35-a760-7c1744b69ddb",
        "name": "www",
        "email": "www@naver.com",
        "created_at": "2025-03-06T06:02:29.678321",
        "active": true
    }, {
        "id": "65c5446c-55da-4864-95b8-a23e0797d4d4",
        "name": "ooo",
        "email": "ooo@naver.com",
        "created_at": "2025-03-06T06:02:29.678321",
        "active": true
    }]
let rows ='';
for(let i = 0; i<test.length;i++){
    rows = rows +`<tr>
        <td>${test[i].id}</td>
        <td>${test[i].name}</td>
        <td>${test[i].email}</td>
        <td>${test[i].created_at}</td>
        <td>${test[i].active}</td>
    </tr>`;
}
console.log(rows);

let users = `<div>
    <table>
        <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>가입날짜</td>
            <td>활성화</td>
        </tr>
        ${rows}
    </table>
    </div>
    `;

    console.log(users);