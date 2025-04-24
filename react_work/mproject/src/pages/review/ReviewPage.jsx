import React from 'react';
import {Outlet} from "react-router-dom";
import {Card, Layout, Table} from "antd"

const {Content} = Layout;

function ReviewPage(props) {
    return (
        <>
           <Content>
               <Card>
                   <div>Review</div>
                   <Outlet/>
               </Card>
           </Content>

        </>
    );
}

export default ReviewPage;