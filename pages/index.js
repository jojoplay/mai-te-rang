import Head from 'next/head';
import { Form, Col, Row, Button, Layout, List, Avatar } from 'antd';
import styled from 'styled-components';

const FormItem = Form.Item
const {Header, Footer, Sider, Content} = Layout;

const Container = styled.div`
        
    @font-face {
        font-family: 'pridi';
        src: url('static/fonts/pridi/pridi-bold-webfont.eot');
        src: url('static/fonts/pridi/pridi-bold-webfont.eot?#iefix') format('embedded-opentype'),
             url('static/fonts/pridi/pridi-bold-webfont.woff2') format('woff2'),
             url('static/fonts/pridi/pridi-bold-webfont.woff') format('woff'),
             url('static/fonts/pridi/pridi-bold-webfont.ttf') format('truetype'),
             url('static/fonts/pridi/pridi-bold-webfont.svg#pridi') format('svg');
        font-weight: 700;
        font-style: normal;
    }
   
    @font-face {
        font-family: 'pridi';
        src: url('static/fonts/pridi/pridi-extralight-webfont.eot');
        src: url('static/fonts/pridi/pridi-extralight-webfont.eot?#iefix') format('embedded-opentype'),
             url('static/fonts/pridi/pridi-extralight-webfont.woff2') format('woff2'),
             url('static/fonts/pridi/pridi-extralight-webfont.woff') format('woff'),
             url('static/fonts/pridi/pridi-extralight-webfont.ttf') format('truetype'),
             url('static/fonts/pridi/pridi-extralight-webfont.svg#pridi') format('svg');
        font-weight: ​200;
        font-style: normal;
    
    }

    @font-face {
        font-family: 'pridi';
        src: url('static/fonts/pridi/pridi-light-webfont.eot');
        src: url('static/fonts/pridi/pridi-light-webfont.eot?#iefix') format('embedded-opentype'),
             url('static/fonts/pridi/pridi-light-webfont.woff2') format('woff2'),
             url('static/fonts/pridi/pridi-light-webfont.woff') format('woff'),
             url('static/fonts/pridi/pridi-light-webfont.ttf') format('truetype'),
             url('static/fonts/pridi/pridi-light-webfont.svg#pridi') format('svg');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'pridi';
        src: url('static/fonts/pridi/pridi-medium-webfont.eot');
        src: url('static/fonts/pridi/pridi-medium-webfont.eot?#iefix') format('embedded-opentype'),
             url('static/fonts/pridi/pridi-medium-webfont.woff2') format('woff2'),
             url('static/fonts/pridi/pridi-medium-webfont.woff') format('woff'),
             url('static/fonts/pridi/pridi-medium-webfont.ttf') format('truetype'),
             url('static/fonts/pridi/pridi-medium-webfont.svg#pridi') format('svg');
        font-weight: 400;
        font-style: normal;
    
    }

    @font-face {
        font-family: 'pridi';
        src: url('static/fonts/pridi/pridi-regular-webfont.eot');
        src: url('static/fonts/pridi/pridi-regular-webfont.eot?#iefix') format('embedded-opentype'),
             url('static/fonts/pridi/pridi-regular-webfont.woff2') format('woff2'),
             url('static/fonts/pridi/pridi-regular-webfont.woff') format('woff'),
             url('static/fonts/pridi/pridi-regular-webfont.ttf') format('truetype'),
             url('static/fonts/pridi/pridi-regular-webfont.svg#pridi') format('svg');
        font-weight: 500;
        font-style: normal;
    
    }

    @font-face {
        font-family: 'pridi';
        src: url('static/fonts/pridi/pridi-semibold-webfont.eot');
        src: url('static/fonts/pridi/pridi-semibold-webfont.eot?#iefix') format('embedded-opentype'),
             url('static/fonts/pridi/pridi-semibold-webfont.woff2') format('woff2'),
             url('static/fonts/pridi/pridi-semibold-webfont.woff') format('woff'),
             url('static/fonts/pridi/pridi-semibold-webfont.ttf') format('truetype'),
             url('static/fonts/pridi/pridi-semibold-webfont.svg#pridi') format('svg');
        font-weight: 600;
        font-style: normal;
    }

      body {
            font-family: 'pridi';
      }

      .img-fluid {
        max-width: 100%;
        height: auto;
      }
    
    @media (min-width: 1200px) {
        .container {
            max-width: 1140px;
        }
    }
    
    
    @media (min-width: 992px){
        .container {
            max-width: 960px;
        }
    }
    .container {
        // width: 100%;
        // padding-right: 15px;
        // padding-left: 15px;
        margin-right: auto;
        background-color: red;
        margin-left: auto;
    }



`;


const d = ({children}) =>
    <div>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            <meta charSet='utf-8'/>
            <link rel='stylesheet' href='/_next/static/style.css'/>
        </Head>
        <style jsx global>{`

    `}</style>
        {children}
    </div>


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
export default () => (
    <Layout>
        <Header>

        </Header>
        <Content>
            <Container>
                <div className="container">
                    <img className="img-fluid" src="static/header.jpg" alt=""/>
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
                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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
)
