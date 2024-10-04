import React from 'react';
import { Card, Avatar, Space, Typography } from '@douyinfe/semi-ui';


function Cards() {
    const { Meta } = Card;
    const { Text } = Typography;

    return (
        <Card
            style={{ maxWidth: 340 }}
            title={
                <Meta 
                    title="用户" 
                    description="签名" 
                    avatar={
                        <Avatar 
                            alt='Card meta img'
                            size="default"
                            src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg'
                        />
                    }
                />
            }
            headerExtraContent={
                <Text>2024/5/25</Text>
            }
            cover={ 
                <img 
                    alt="example" 
                    src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg" 
                />
            }
            footerLine={ true }
            footerStyle={{ display: 'flow', justifyContent: 'flow-end' }}
            footer={
                <Space>
                    <div>阅读量</div>
                    <div>评论</div>
                    <div>点赞</div>
                </Space>
            }
        >
            鸣潮开始公测
        </Card>
    );
}

export default Cards;
