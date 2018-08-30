import Head from 'next/head';
import NextLayout from '@app/components/Layout'
import { Form, Col, Row, Button, Layout, List, Avatar, Carousel } from 'antd';
import styled from 'styled-components';
import HeaderImage from '@app/assets/images/header.jpg'

const FormItem = Form.Item
const {Header, Footer, Sider, Content} = Layout;

const Container = styled.div``;

const datalist = [
    {
        title: 'ไม้ผ่านการอบ เพื่อให้ไม้แห้งป้องกันปัญหาเชื้อรา',
    },
    {
        title: 'ใส เซาะร่อง (ลูกค้าสามารถ กำหนดจำนวนร่องได้)',
    },
    {
        title: 'ไม้สวย คุณภาพดี เราคัดไม้มาอย่างดี',
    },
    {
        title: 'พร้อมใบเบิกทาง หมดปัญหาด้านขนส่ง',
    },
];

function onChange(a, b, c) {
    console.log(a, b, c);
}

export default () => (
    <NextLayout>
        <Layout>
        <Head>
            
        </Head>
        <Content>
            <Container>
                <div className="container">
                    <img className="img-fluid" src={HeaderImage} alt=""/>
                    <Row gutter={16}>
                        <Col xs={24}>
                            <h1>ไม้ตีรัง บ้านนก ราคาถูก (เราเป็นโรงไม้นำเข้าไม้จากต่างประเทศ)</h1>

                            - ไม้ผ่านการอบ เพื่อให้ไม้แห้งป้องกันปัญหาเชื้อรา
                            - ใส เซาะร่อง (ลูกค้าสามารถ กำหนดจำนวนร่องได้)
                            - ไม้สวย คุณภาพดี เราคัดไม้มาอย่างดี
                            - พร้อมใบเบิกทาง หมดปัญหาด้านขนส่ง
                            <List
                                itemLayout="horizontal"
                                dataSource={datalist}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar size="large" icon="user"/>}
                                            title={<a href="https://ant.design">{item.title}</a>}
                                            // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                        />
                                    </List.Item>
                                )}
                            />
                            ไม้สยาแดง หน้า 6 นิ้ว ราคา เมตรละ 90 บาท
                            หน้า 8 นิ้ว ราคา เมตรละ 110 บาท

                            ไม้สยาหิน หน้า 6 นิ้ว ราคา เมตรละ 120 บาท
                            หน้า 8 นิ้ว ราคา เมตรละ 140 บาท
                            (ไม้สยาหินจะแข็งแรงกว่า ทนกว่า อายุการใช้งานจะนานกว่าไม้สยาแดง)

                            ไม้มุม หน้า 6 นิ้ว ราคา ตัวละ 20 บาท
                            หน้า 8 นิ้ว ราคา ตัวละ 23 บาท

                            ไม้มุมแบบมีร่อง หน้า 6 นิ้ว ราคา ตัวละ 25 บาท
                            หน้า 8 นิ้ว ราคา ตัวละ 28 บาท

                            <Carousel afterChange={onChange}>
                                <div><h3>1</h3></div>
                                <div><h3>2</h3></div>
                                <div><h3>3</h3></div>
                                <div><h3>4</h3></div>
                            </Carousel>,

                        </Col>
                    </Row>
                </div>
            </Container>
        </Content>
        <Footer>

            Footer
            592d14 น้ำตาล
            ส้ม
            Icon made by Freepik from www.flaticon.com


        </Footer>
    </Layout>
    </NextLayout>
)
