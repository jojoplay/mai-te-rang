import Head from 'next/head';
import NextLayout from '@app/components/Layout'
import LineButton from '@app/components/LineButton'
import { Form, Col, Row, Button, Layout, List, Avatar, Carousel, Card, Icon } from 'antd';
import styled from 'styled-components';
import HeaderImage from '@app/assets/images/header.jpg'
import HeaderMobileImage from '@app/assets/images/header-mobile.jpg'
import list from '@app/assets/images/list.jpg'
import price from '@app/assets/images/price.jpg'
import hero1 from '@app/assets/images/hero/bannokdotcom-1.jpg'
import hero2 from '@app/assets/images/hero/bannokdotcom-2.jpg'
import hero3 from '@app/assets/images/hero/bannokdotcom-3.jpg'
import hero4 from '@app/assets/images/hero/bannokdotcom-4.jpg'
import hero5 from '@app/assets/images/hero/bannokdotcom-5.jpg'
import hero6 from '@app/assets/images/hero/bannokdotcom-6.jpg'
import hero7 from '@app/assets/images/hero/bannokdotcom-7.jpg'
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
import lot1Pic13 from '@app/assets/images/lot1/bannokdotcom-13.jpg'
import lot1Pic14 from '@app/assets/images/lot1/bannokdotcom-14.jpg'
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

export default () => (
    <NextLayout>
        <Layout>
            <Head>

            </Head>
            <Content>

                <Container>
                    <div className="container-header">
                        <img className="img-fluid d-none d-sm-block" src={HeaderImage} alt=""/>
                        <img className="img-fluid d-block d-sm-none" src={HeaderMobileImage} alt=""/>
                        <div className="trinangle-left d-none d-md-block"></div>
                        <div className="trinangle-right d-none d-md-block"></div>

                    </div>
                    <div className="container px-15px">
                        <Row gutter={16}>
                            <Col xs={24}>

                                <h1 className="text-center m-large primary">
                                    ไม้ตีรัง บ้านนก ราคาถูก <LineButton/>
                                </h1>

                                เราเป็นโรงไม้นำเข้าไม้จากต่างประเทศ

                                <h4>
                                    บริษัท นราว์ดแลนด์
                                    699/1 ถ.ประชาวิวัฒน์ สุไหงโกลก นราธิวาส 96120 ภายใต้การบริหารงานของคุณแม่ ทรงศรี
                                    บุญอนันต์ เป็นเวลามากกว่า 30 ปี
                                </h4>

                                <div className="d-block d-sm-none contact-box m-large">
                                    สอบถามราคาโปรโมชันได้ที่<br/>
                                    คุณโกโก้ <a style={{color: "#ffffff"}} href="tel: 096-542-4144"><u>096-542-4144</u></a> หรือ
                                    ID line <a style={{color: "#ffffff"}}
                                               href="http://line.me/ti/p/~kokokookai"><u>kokokookai</u></a>
                                </div>



                                <List
                                    grid={{gutter: 10, xs: 1, sm: 1, md: 4, lg: 4, xl: 4, xxl: 4}}
                                    itemLayout="horizontal"
                                    dataSource={slogan}
                                    size="large"
                                    renderItem={(item, index) => (
                                        <List.Item>
                                            <Card title={item.title}
                                                  cover={<img alt={item.title} src={item.slogan}/>}
                                            >

                                                <Card.Meta
                                                    avatar={<Icon type="check-circle-o"
                                                                  style={{fontSize: 30, color: 'green'}}/>}
                                                    description={item.desc}
                                                />
                                            </Card>
                                        </List.Item>
                                    )}
                                />

                                <div className="contact-box m-large d-none d-sm-block">
                                    สอบถามราคาโปรโมชันได้ที่<br/>
                                    คุณโกโก้ <a style={{color: "#ffffff"}} href="tel: 096-542-4144"><u>096-542-4144</u></a> หรือ
                                    ID line <a style={{color: "#ffffff"}}
                                               href="http://line.me/ti/p/~kokokookai"><u>kokokookai</u></a>
                                </div>
                            </Col>
                        </Row>

                        <Row gutter={15} style={{paddingTop: "15px"}}>
                            <Col xs={24} sm={12}>
                                <img className="img-fluid pb-xs-15px" src={hero1} alt=""/>
                            </Col>
                            <Col xs={24} sm={12}>
                                <img className="img-fluid" src={hero2} alt=""/>
                            </Col>
                        </Row>
                        <Row gutter={15} style={{paddingTop: "15px"}}>
                            <Col xs={24} sm={12}>
                                <img className="img-fluid pb-xs-15px" src={hero3} alt=""/>
                            </Col>
                            <Col xs={24} sm={12}>
                                <img className="img-fluid" src={hero4} alt=""/>
                            </Col>
                        </Row>
                        <Row gutter={15} style={{paddingTop: "15px"}}>

                            <Col xs={24} sm={8}>
                                <img className="img-fluid pb-xs-15px" src={hero5} alt=""/>
                            </Col>
                            <Col xs={24} sm={8}>
                                <img className="img-fluid pb-xs-15px" src={hero6} alt=""/>
                            </Col>
                            <Col xs={24} sm={8}>
                                <img className="img-fluid" src={hero7} alt=""/>
                            </Col>
                        </Row>
                        <Row gutter={15} className="py-15px">
                            <Col xs={24} sm={12} md={8}>
                                <Carousel {...settings}>
                                    <div><img className="img-fluid" src={lot1Pic1} alt=""/></div>
                                    <div><img className="img-fluid" src={lot1Pic2} alt=""/></div>
                                    <div><img className="img-fluid" src={lot1Pic3} alt=""/></div>
                                    <div><img className="img-fluid" src={lot1Pic4} alt=""/></div>
                                    <div><img className="img-fluid" src={lot1Pic5} alt=""/></div>
                                    <div><img className="img-fluid" src={lot1Pic6} alt=""/></div>
                                </Carousel>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                                <Carousel {...settings}>

                                    <div><img className="img-fluid" src={lot1Pic7} alt=""/></div>
                                    <div><img className="img-fluid" src={lot1Pic8} alt=""/></div>
                                    <div><img className="img-fluid" src={lot1Pic9} alt=""/></div>
                                    <div><img className="img-fluid" src={lot1Pic10} alt=""/></div>
                                    <div><img className="img-fluid" src={lot1Pic11} alt=""/></div>


                                </Carousel>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                                <Carousel {...settings}>
                                    <div><img className="img-fluid" src={lot1Pic12} alt=""/></div>
                                    <div><img className="img-fluid" src={lot1Pic13} alt=""/></div>
                                    <div><img className="img-fluid" src={lot1Pic14} alt=""/></div>
                                </Carousel>
                            </Col>
                        </Row>


                    </div>

                    <div className="text-center p-medium">
                        <h2 className="primary">ไม้สยาแดง</h2>
                        <h3>หน้า 6 นิ้ว ราคา เมตรละ 90 บาท <br/>
                            หน้า 8 นิ้ว ราคา เมตรละ 110 บาท</h3>
                    </div>

                    <div className="text-center p-medium">
                        <h2 className="primary">ไม้สยาหิน</h2>
                        <h3>หน้า 6 นิ้ว ราคา เมตรละ 120 บาท<br/>
                            หน้า 8 นิ้ว ราคา เมตรละ 140 บาท</h3>
                        <h4>(ไม้สยาหินจะแข็งแรงกว่า ทนกว่า อายุการใช้งานจะนานกว่าไม้สยาแดง)</h4>
                    </div>

                    <div className="text-center p-medium">
                        <h2 className="primary">ไม้มุม</h2>
                        <h3>หน้า 6 นิ้ว ราคา ตัวละ 20 บาท<br/>
                            หน้า 8 นิ้ว ราคา ตัวละ 23 บาท</h3>
                    </div>

                    <div className="text-center p-medium">
                        <h2 className="primary">ไม้มุมแบบมีร่อง</h2>
                        <h3>หน้า 6 นิ้ว ราคา ตัวละ 25 บาท<br/>
                            หน้า 8 นิ้ว ราคา ตัวละ 28 บาท</h3>
                    </div>

                    <div className="text-center m-large">
                        <h3 className="orange">แอดไลน์ หรือ โทรสอบถาม โปรโมชันพิเศษ ได้ที่</h3>
                        <h3><a href="tel: 096-542-4144">096-542-4144</a> หรือ</h3>
                        ID line kokokookai <br/> คลิก <LineButton/>
                    </div>
                </Container>
            </Content>
            <Footer className="footer">
                <Row>
                    <Col xs={12}>Copyright © 2018 Bannok.com</Col>
                    <Col xs={12} className="text-right"><h6>Icon made by Freepik from www.flaticon.com</h6></Col>
                </Row>
                บริษัท นราว์ดแลนด์ 699/1 ถ.ประชาวิวัฒน์ สุไหงโกลก นราธิวาส 96120 ภายใต้การบริหารงานของคุณแม่ ทรงศรี
                บุญอนันต์ เป็นเวลามากกว่า 30 ปี
            </Footer>
        </Layout>
    </NextLayout>
)
