import { Container, Row, Col } from 'react-bootstrap';
import CountsContainer from '../components/count';
import "./about.css";
import WhatsAppButton from '../components/whatsapp';

export default function About() {
    return (
        <>
            <div className="about">
                <h1>ABOUT PANTHER EXIM</h1>
            </div>
            <div className='about-contant my-10'>
                <Container>
                <h1 className='heading'> <span>Our Network</span></h1>
                    <Row className="d-flex flex-column-reverse flex-lg-row">
                        <Col lg={6} className="network-p order-lg-2">
                            <img src='/images/about/company.jpg' alt='company.jpg' className="img-fluid" />
                        </Col>
                        <Col lg={6} className="network-i order-lg-1">
                            <div>
                                <p>
                                    The finest brass products in the world are available at Panther Exim. Our business is genuinely committed to offering quality and durability. We are the top manufacturer of brass items, and we're dedicated to giving you the greatest goods at the best prices. For many years, our business has produced the finest brass products.
                                </p>
                                <p>
                                    The satisfaction of our customers comes first for us. In order to fulfill the requirements and expectations of our clients, our staff works arduously and diligently. As a well-known brand in the industry, we guarantee the best possible products and dependable services.
                                </p>
                                <p>
                                    Panther Exim is a leading manufacturing, exporting, and supplying company of supreme quality Sanitary Parts, Cable Glands, and other products. The offered products by us are precisely designed and developed by our team of trained and experienced professionals, in order to meet international standards. Our well-equipped infrastructure facility and advanced machines support us to design these products as per the specific requirements of our clients.
                                </p>
                                <p>
                                    We offer a wide range of products for all your needs, including extension pieces, hax nipples, UNIONs, LINE TAPS / SPLIT BOLTs, FLANGE PROOF TYPE CABLE GLANDS, DOUBLE COMPRESSION TYPE CABLE GLANDS, and SINGLE COMPRESSION TYPE DUTY CABLE GLANDS. With over 5 years of experience in the industry, we are confident that we can provide you with the best products and services available.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <CountsContainer />
                    <Row className="row-custom my-5">
                        <Col className="col-custom">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <img src='/images/about/settings.png' alt='automobile.png' className="img-fluid" />
                                </div>
                                <div className="col col-content">
                                    <>
                                        <h3>Automobile Systems and Components</h3>
                                        <p>Bring win-win survival tips to the table to ensure proactive leadership.</p>
                                    </>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-custom">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <img src='/images/about/maintance.png' alt='automobile.png' className="img-fluid" />
                                </div>
                                <div className="col col-content">
                                    <>
                                        <h3>Solutions for maintenance</h3>
                                        <p>Benefit from easy pickings to locate the highest ballpark.</p>
                                    </>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-custom">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <img src='/images/about/chat.png' alt='automobile.png' className="img-fluid" />
                                </div>
                                <div className="col col-content">
                                    <>
                                        <h3>Call center</h3>
                                        <p>Give us a toll-free call at<br />+91 7984353863 </p>
                                    </>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
                
            </div>
            <WhatsAppButton />


        </>
    )
}