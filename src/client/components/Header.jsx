import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium, faGoodreads, faAutoprefixer } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/fontawesome-free-solid';



import HeaderStyle from '../styles/Header.less';

import { Link, Container } from './Common.jsx';
import Palette from '../global.js';

class Header extends Component {

    getContactMethods() {
        return (
            <div style={{zIndex: 100}}>
                
                <a className="mx-2 h5 d-inline-block" href="https://drive.google.com/file/d/1-r65YvF76GjrgQi4Lhljc9ru1foEjUaA/view?usp=sharing" target="_blank">
                    <FontAwesomeIcon icon={faFile} color={Palette.white} />
                </a>
                <a className="mx-2 h5 d-inline-block" href="https://github.com/hanburger97" target="_blank">
                    <FontAwesomeIcon icon={faGithub} color={Palette.white} />
                </a>
                <a className="mx-2 h5 d-inline-block" href="https://www.linkedin.com/in/hanburger/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} color={Palette.white} />
                </a>
                <a className="mx-2 h5 d-inline-block" href="https://medium.com/@hanx.ca" target="_blank">
                    <FontAwesomeIcon icon={faMedium} color={Palette.white} />
                </a>
                <a className="mx-2 h5 d-inline-block" href="mailto:yhxiao@uwaterloo.ca" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} color={Palette.white} />
                </a>
                <a className="mx-2 h5 d-inline-block" href="https://www.goodreads.com/user/show/113736962-han-xiao" target="_blank">
                    <FontAwesomeIcon icon={faGoodreads} color={Palette.white} />
                </a>

            </div>
        )
    }

    render() {
        return (
            <div>
                <Container color={Palette.forest_green} style={{height: "100vh", zIndex: 0}}>
                <br/> <br/>
                <Row style={{zIndex: 100}}>
                    <Col md={{span: 5, offset: 1}} sm={12} className="container" style={{zIndex: 100}}>
                        <Row>
                            <img src="public/img/hanx_w.svg" style={{height: '5rem'}}/>
                            <div style={{'padding-left': "20px"}}>
                                <h1>Han Xiao</h1>
                                <h5>software engineer & pilot </h5>                            
                            </div>
                        </Row>
                            <br/>
                            <p style={{zIndex: 100}}>
                                Third-year software engineering student at the <Link href="https://uwaterloo.ca/" target="_blank">University of Waterloo, </Link>
                                passionate about distributed systems, SRE and databases. I am  
                                looking for impactful internships in fast growing companies.
                            </p> 
                            <p style={{zIndex: 100}}>
                                Previous experiences includes production engineering and back-end development at <Link href="https://www.shopify.ca/" target="_blank">Shopify</Link>, back-end and cloud development at <Link href="https://www.bynorth.com/" target="_blank">North </Link>(acquired by Google).
                            </p>
                            <p style={{zIndex: 100}}>
                                I am a pilot and an aviation lover. I am always seeking new adventures and thrills in travelling around the world, in meeting new people and in trying new experiences. In my free time, I love to 
                                <Link href="https://www.goodreads.com/user/show/113736962-han-xiao" target="_blank"> read </Link> and  <Link href="https://medium.com/@hanx.ca" target="_blank">write.</Link> I also enjoy snowboarding, volleyball and rugby. 
                            </p>
                            {/* <p style={{zIndex: 100}}>
                                I have recently created a live <Link href="/#/wellness">dashboard</Link> to keep track of my health and wellness profile during the COVID-19 quarantine.
                            </p> */}
                            {this.getContactMethods()}
                            
                    </Col>
                    <Col md={6} sm={12} style={{zIndex: 100}}>
                        <img src="public/img/laptop_scene.svg" style={{height: "60vh", top: '24vh', position: 'fixed', paddingLeft: '5rem', zIndex: 100}}/>
                    </Col>
                </Row>     
                </Container>

                <img src="public/img/wave2.svg" style={{width: '100vw', height: '100%', position: 'fixed', bottom: 0, left: 0, overflow: 'hidden', objectFit: 'cover', zIndex: 6, top: '55vh'}} />
                <img src="public/img/wave1.svg" style={{opacity: 0.7, width: '100vw', height: '100%', position: 'fixed', bottom: 0, left: 0, overflow: 'hidden', objectFit: 'cover', zIndex: 4, top: '65vh'}} />
                <img src="public/img/wave3.svg" style={{width: '100vw', height: '100%', position: 'fixed', bottom: 0, left: 0, overflow: 'hidden', objectFit: 'cover', zIndex: 5, top: '75vh'}} />



            </div>
        )
    }
}

export default Header;