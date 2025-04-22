import React, {useEffect, useState} from 'react';
import {Button, Card, Layout, message, notification, Popconfirm, Table} from "antd";
import {deleteUserById, getUsers} from "../../database/userManager.js";

const {Content} = Layout;

function UserListPage(props) {
    useEffect(() => {
        deleteUserById([33, 35])
    }, [])
    const columns = [
        {title: "Name", dataIndex: "name"},
        {title: "email", dataIndex: "email"},
        {title: "age", dataIndex: "age"},
        {title: "phone", dataIndex: "phone"},
    ];
    const [dataSource, setDataSource] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    async function loadData() {
        const {data} = await getUsers();
        setDataSource(data);
    }

    const rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: (newSelectedRowKeys) => {
            setSelectedRowKeys(newSelectedRowKeys);
        },
    };

    async function handleDelete() {
        const {error} = await deleteUserById(selectedRowKeys);
        // 에러는 null값일 때 성공한것
        // 에러에 값이 있으면 실패
        if(error) {
            message.error(error);
        }else{
            message.success('삭제하였습니다');
            notification.success({
                message:"삭제하였습니다"
            })
            setSelectedRowKeys([]);
            loadData();
        }
    }

    useEffect(() => {

        loadData();
    }, []);

    return (
        <Content>
            <Card hoverable style={{margin: '1rem'}} styles={{overflowX: 'auto'}}>
                <h1>안녕하세요</h1>
                <div style={{margin: '1rem 0'}}>
                    <Popconfirm title="삭제하시겠습니까?" onConfirm={handleDelete}>
                        <Button danger disabled={selectedRowKeys.length === 0}>삭제</Button>
                    </Popconfirm>
                </div>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    rowKey="id"
                    rowSelection={rowSelection}
                    scroll={{x: 'max-content'}}
                    style={{width: '100%'}}
                >
                </Table>
            </Card>
        </Content>
    );
}

export default UserListPage;
