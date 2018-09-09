import Head from 'next/head';
import NextLayout from '@app/components/Layout'
import LineButton from '@app/components/LineButton'
import Analytics from '@app/components/Analytics'
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

import slider1Pic1 from '@app/assets/images/slider1/bannokdotcom-1.jpg'
import slider1Pic2 from '@app/assets/images/slider1/bannokdotcom-2.jpg'
import slider1Pic3 from '@app/assets/images/slider1/bannokdotcom-3.jpg'
import slider1Pic4 from '@app/assets/images/slider1/bannokdotcom-4.jpg'

import slider2Pic1 from '@app/assets/images/slider2/bannokdotcom-1.jpg'
import slider2Pic2 from '@app/assets/images/slider2/bannokdotcom-2.jpg'
import slider2Pic3 from '@app/assets/images/slider2/bannokdotcom-3.jpg'
import slider2Pic4 from '@app/assets/images/slider2/bannokdotcom-4.jpg'

import slider3Pic1 from '@app/assets/images/slider3/bannokdotcom-1.jpg'
import slider3Pic2 from '@app/assets/images/slider3/bannokdotcom-2.jpg'
import slider3Pic3 from '@app/assets/images/slider3/bannokdotcom-3.jpg'
import slider3Pic4 from '@app/assets/images/slider3/bannokdotcom-4.jpg'

import slogan1 from '@app/assets/images/slogan/1.jpg'
import slogan2 from '@app/assets/images/slogan/2.jpg'
import slogan3 from '@app/assets/images/slogan/3.jpg'
import slogan4 from '@app/assets/images/slogan/4.jpg'
import Slider from "react-slick";


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

const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    fade:true
};

export default () => (
    <NextLayout>
        <Layout>
            <Head>

            </Head>
            <Content>

                <Container>
                    <div className="container-header">
                        {/*TODO: HeaderMobileImage*/}
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


                                <h3 className="normal">
                                    บริษัท นราวู๊ดแลนด์ จำกัด  เราเป็นผู้นำเข้า และจัดจำหน่ายไม้ตีรัง และไม้ปิดมุม ด้วยประสบการณ์และความเชี่ยวชาญในวงการไม้มานานกว่า 30 ปี ทางเรามีความเข้าใจในการผลิตไม้ตีรัง ไม้ปิดมุมเป็นอย่างดี การันตีด้วยความไว้วางใจจากลูกค้าจำนวนมาก  และภายใต้การบริหารงานของคุณแม่ทรงศรี บุญอนันต์ ที่คัดสรรไม้คุณภาพจากประเทศมาเลเซีย มาอบใส เซาะร่อง ให้ตรงตามความต้องการของลูกค้าทุกรายละเอียด
                                </h3>


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


                                <h3 className="normal">
                                    การเลือกไม้ตีรังเป็นเรื่องสำคัญมาก จากการทดสอบใช้ไม้ในประเทศอินโดนีเซีย มาเลเซียและไทย พบว่านกแอ่นชื่นชอบและพอใจ ไม้ Meranti wood หรือ สายหิน เพราะเป็นไม้เนื้อแข็งกลาง ไม่มีกลิ่น มีใย ทำให้น้ำลายนกแอ่นยึดติดเกาะได้ดี ลักษณะของไม้ตีรังที่ดี ต้องสะอาด แห้งสนิท ไม่มีเชื้อรา และฝุ่น ส่วนประโยชน์ของไม้ปิดมุม นอกจากความสวยงามของรังแล้ว จะเห็นได้ว่านกแอ่นคู่ใหม่มักจะตัดสินใจทำรังที่มุมก่อนเสมอ ถือเป็นเทคนิคการเพิ่มปริมาณประชากรนกแอ่นในบ้านนกได้เป็นอย่างดี
                                </h3>

                                <div className="text-center">
                                    <LineButton/>
                                </div>
                                <div className="contact-box m-large d-sm-block">
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
                            <Col xs={24} sm={24} md={8}>
                                <Slider {...settings}>
                                    <div><img className="img-fluid" src={slider1Pic1} alt=""/></div>
                                    <div><img className="img-fluid" src={slider1Pic2} alt=""/></div>
                                    <div><img className="img-fluid" src={slider1Pic3} alt=""/></div>
                                    <div><img className="img-fluid" src={slider1Pic4} alt=""/></div>

                                </Slider>
                            </Col>
                            <Col xs={24} sm={24} md={8}>
                                <Slider {...settings}>
                                    <div><img className="img-fluid" src={slider2Pic1} alt=""/></div>
                                    <div><img className="img-fluid" src={slider2Pic2} alt=""/></div>
                                    <div><img className="img-fluid" src={slider2Pic3} alt=""/></div>
                                    <div><img className="img-fluid" src={slider2Pic4} alt=""/></div>


                                </Slider>
                            </Col>
                            <Col xs={24} sm={24} md={8}>
                                <Slider {...settings}>
                                    <div><img className="img-fluid" src={slider3Pic1} alt=""/></div>
                                    <div><img className="img-fluid" src={slider3Pic2} alt=""/></div>
                                    <div><img className="img-fluid" src={slider3Pic3} alt=""/></div>
                                    <div><img className="img-fluid" src={slider3Pic4} alt=""/></div>
                                </Slider>
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
                        ID line kokokookai <br/>  <LineButton/>

                        <a style={{ paddingLeft: "15px" }} href="https://web.facebook.com/%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%87-%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%99%E0%B8%81-%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%96%E0%B8%B9%E0%B8%81-184800775644270/"
                            target="_blank"
                        >
                            <Icon style={{ fontSize: "50px", verticalAlign: "middle", color: "#4267b2"}} type="facebook" theme="outlined" />
                        </a>
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
            <Analytics />
        </Layout>
    </NextLayout>
)
