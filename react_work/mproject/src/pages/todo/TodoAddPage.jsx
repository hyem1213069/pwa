import React, {useState} from 'react';
import {Button, Card, Form, Input, Layout, notification, Select} from "antd";


function TodoAddPage(props) {
    const [loading, setLoading] = useState(false);
    const onFinish = (values) => {
        setLoading(true);
        console.log(values);
        console.log("저장할거");
        setLoading(false);
        fetch('https://6809e0571f1a52874cde2b14.mockapi.io/todos',{
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res=>res.json())
            .then(data => {
                notification.success({
                    message: "성공적으로 저장하였습니다"
                })
            })
        setLoading(false);
    }

    return (
        <div>
            <Layout.Content>
                <h1>ADD page</h1>
                <Card hoverable>
                    {/*layout vertical 세로로 나오게*/}
                    {/*submit 버튼 누르면 onFinish 함수연결*/}
                    {/*initiaValues From 에 초기값 설정*/}
                    <Form layout="vertical" onFinish={onFinish} initialValues={{
                        createdAt: "2025-04-24T09:10:09.632Z",
                        todo: "추가하기",
                        completed: "false",
                        userId: "123",
                        id: "1"
                    }}>
                        <Form.Item label="todo" name="todo" rules={[{required:true, message:"할일을 입력하세요"}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label="completed" name="completed" rules={[{required:true, message:"할일 완료여부 선택하세요"}]}>
                            <Select>
                                <Select.Option value="false">미완료</Select.Option>
                                <Select.Option value="true">완료</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="userId" name="userId" rules={[{ required: true, message: "ID를 입력하세요" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading} block>저장</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Layout.Content>
        </div>
    );
}

export default TodoAddPage;