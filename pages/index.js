import Head from 'next/head';
import NextLayout from '@app/components/Layout'
import { Form, Col, Row, Button, Layout, List, Avatar, Carousel, Card, Icon } from 'antd';
import styled from 'styled-components';
import HeaderImage from '@app/assets/images/header.jpg'
import list from '@app/assets/images/list.jpg'
import price from '@app/assets/images/price.jpg'
import hero1 from '@app/assets/images/hero/bannokdotcom-1.jpg'
import hero2 from '@app/assets/images/hero/bannokdotcom-2.jpg'
import hero3 from '@app/assets/images/hero/bannokdotcom-3.jpg'
import hero4 from '@app/assets/images/hero/bannokdotcom-4.jpg'
import lot1Pic1 from '@app/assets/images/lot1/bannokdotcom-1.jpg'
import lot1Pic2 from '@app/assets/images/lot1/bannokdotcom-2.jpg'
import lot1Pic3 from '@app/assets/images/lot1/bannokdotcom-3.jpg'
import lot1Pic4 from '@app/assets/images/lot1/bannokdotcom-4.jpg'
import lot1Pic5 from '@app/assets/images/lot1/bannokdotcom-5.jpg'
import lot1Pic6 from '@app/assets/images/lot1/bannokdotcom-6.jpg'
import lot1Pic7 from '@app/assets/images/lot1/bannokdotcom-7.jpg'
import lot1Pic8 from '@app/assets/images/lot1/bannokdotcom-8.jpg'
import lot1Pic9 from '@app/assets/images/lot1/bannokdotcom-9.jpg'
import lot1Pic10 from '@app/assets/images/lot1/bannokdotcom-10.jpg'
import lot1Pic11 from '@app/assets/images/lot1/bannokdotcom-11.jpg'
import lot1Pic12 from '@app/assets/images/lot1/bannokdotcom-12.jpg'
import slogan1 from '@app/assets/images/slogan/1.jpg'
import slogan2 from '@app/assets/images/slogan/2.jpg'
import slogan3 from '@app/assets/images/slogan/3.jpg'
import slogan4 from '@app/assets/images/slogan/4.jpg'

const FormItem = Form.Item
const {Header, Footer, Sider, Content} = Layout;

const Container = styled.div``;

const slogan = [
    {
        title: 'ไม้ผ่านการอบ ',
        desc: 'เพื่อให้ไม้แห้งป้องกันปัญหาเชื้อรา',
        slogan: slogan1
    },
    {
        title: 'ใส เซาะร่อง ',
        desc: '(ลูกค้าสามารถ กำหนดจำนวนร่องได้)',
        slogan: slogan2


    },
    {
        title: 'ไม้สวย คุณภาพดี ',
        desc: 'เราคัดไม้มาอย่างดี',
        slogan: slogan3


    },
    {
        title: 'พร้อมใบเบิกทาง',
        desc: 'หมดปัญหาด้านขนส่ง',
        slogan: slogan4


    },
];

function onChange(a, b, c) {
    console.log(a, b, c);
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const priceList = [
    {
        title: 'ไม้สยาแดง หน้า 6 นิ้ว ราคา เมตรละ 90 บาท\n' +
        'หน้า 8 นิ้ว ราคา เมตรละ 110 บาท',
    },
    {
        title: 'ไม้สยาหิน หน้า 6 นิ้ว ราคา เมตรละ 120 บาท\n' +
        'หน้า 8 นิ้ว ราคา เมตรละ 140 บาท\n' +
        '(ไม้สยาหินจะแข็งแรงกว่า ทนกว่า อายุการใช้งานจะนานกว่าไม้สยาแดง)',
    },
    {
        title: '\n' +
        'ไม้มุม หน้า 6 นิ้ว ราคา ตัวละ 20 บาท\n' +
        'หน้า 8 นิ้ว ราคา ตัวละ 23 บาท',
    },
    {
        title: 'ไม้มุมแบบมีร่อง หน้า 6 นิ้ว ราคา ตัวละ 25 บาท\n' +
        'หน้า 8 นิ้ว ราคา ตัวละ 28 บาท',
    },
];








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

                            <h1 style={{fontSize: "40px"}} className="text-center m-large">ไม้ตีรัง บ้านนก ราคาถูก</h1>

                            <h2>(เราเป็นโรงไม้นำเข้าไม้จากต่างประเทศ)</h2>



                            <List
                                grid={{ gutter: 16, xs: 1, sm: 22, md: 2, lg: 2, xl: 4, xxl: 4 }}
                                itemLayout="horizontal"
                                dataSource={slogan}
                                size="large"
                                renderItem={(item, index) => (
                                    <List.Item>
                                        <Card title={item.title}
                                              cover={<img alt="example" src={item.slogan} />}
                                        >

                                            <Card.Meta
                                                avatar={<Icon type="check-circle-o" style={{ fontSize: 30, color: 'green' }}/>}
                                                description={item.desc}
                                            />
                                            </Card>
                                        {/*<List.Item.Meta*/}
                                            {/*avatar={<Icon type="check-circle-o" />}*/}
                                            {/*title={<h2>{item.title}</h2>}*/}
                                            {/*// description="Ant Design, a design language for background applications, is refined by Ant UED Team"*/}
                                        {/*/>*/}
                                    </List.Item>
                                )}
                            />

                            <List
                                itemLayout="horizontal"
                                dataSource={priceList}
                                size="large"
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={list} />}
                                            title={<h2>{item.title}</h2>}
                                            // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                        />
                                    </List.Item>
                                )}
                            />



                            <div className="contact-box m-large">
                                สอบถามราคาโปรโมชันได้ที่
                                คุณโกโก้ 096-542-4144
                                ID line kokokookai
                            </div>


                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6}/>
                        <Col xs={10}>
                            <img className="img-fluid" src={price} alt="ราคา"/>
                        </Col>
                        <Col xs={6}/>

                    </Row>
                    บริษัท นราว์ดแลนด์
                    699/1 ถ.ประชาวิวัฒน์ สุไหงโกลก นราธิวาส 96120 ภายใต้การบริหารงานของคุณแม่ ทรงศรี บุญอนันต์ เป็นเวลามากกว่า 30 ปี

                    <Row>
                        <Col xs={24} sm={12}>
                            <img className="img-fluid" src={hero3} alt=""/>
                        </Col>
                        <Col xs={24} sm={12}>
                            <img className="img-fluid" src={hero4} alt=""/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={12} md={8}>
                            <Carousel {...settings} afterChange={onChange} >
                                <div><img className="img-fluid" src={lot1Pic1} alt=""/></div>
                                <div><img className="img-fluid" src={lot1Pic2} alt=""/></div>
                                <div><img className="img-fluid" src={lot1Pic3} alt=""/></div>
                                <div><img className="img-fluid" src={lot1Pic4} alt=""/></div>
                            </Carousel>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Carousel {...settings} afterChange={onChange} >
                                <div><img className="img-fluid" src={lot1Pic5} alt=""/></div>
                                <div><img className="img-fluid" src={lot1Pic6} alt=""/></div>
                                <div><img className="img-fluid" src={lot1Pic7} alt=""/></div>
                                <div><img className="img-fluid" src={lot1Pic8} alt=""/></div>

                            </Carousel>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Carousel {...settings} afterChange={onChange} >
                                <div><img className="img-fluid" src={lot1Pic9} alt=""/></div>
                                <div><img className="img-fluid" src={lot1Pic10} alt=""/></div>
                                <div><img className="img-fluid" src={lot1Pic11} alt=""/></div>
                                <div><img className="img-fluid" src={lot1Pic12} alt=""/></div>
                            </Carousel>
                        </Col>
                    </Row>


                </div>
            </Container>
        </Content>
        <Footer>



            Footer
            592d14 น้ำตาล
            ส้ม ee5c36
            Icon made by Freepik from www.flaticon.com


        </Footer>
    </Layout>
    </NextLayout>
)
