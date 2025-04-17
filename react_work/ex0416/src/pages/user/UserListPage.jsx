import React, {useEffect, useState} from 'react';
import {Card, Layout, Table} from "antd";
import {getUsers} from "../../database/userManager.js";

const {Content} = Layout;

function UserListPage(props) {
    const columns = [
        {title: "Name", dataIndex: "name"},
        {title: "Email", dataIndex: "email"},
        {title: "Phone", dataIndex: "phone"}, // ← 여기 고쳤음!
        {title: "Age", dataIndex: "age"},
    ];

    const [dataSource, setDataSource] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectedRowChange = (newSelectedKeys) => {
        setSelectedRowKeys(newSelectedKeys);
        console.log('선택된 행 키:', newSelectedKeys);
    };

    // selectedRowkeys 현재 선택된 키인 ID값 사용하기 위한 용도
    // onChange 선택된 행이 변경되었을 때 실해오디는 함수 정의

    const rowSelection = {
        selectedRowKeys, // 바로 값 넘겨줘야 해요
        onChange: onSelectedRowChange,
    };

    useEffect(() => {
        async function localData() {
            const {data} = await getUsers();
            setDataSource(data);
        }

        localData();
    }, []);


    return (<>
        <Content>
            <Card hoverable style={{margin: '1rem'}} styles={{overflowX: 'auto'}}>
                <h1>안녕하세요</h1>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    rowKey="id" rowSelection={rowSelection}
                    scroll={{x: 'max-content'}}
                    style={{ width: '100%' }}
                >

                </Table>
            </Card>
        </Content>
    </>);
}

export default UserListPage;