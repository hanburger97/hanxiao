import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button, Collapse } from "shards-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { Canvas } from 'react-three-fiber';

import Scene from './Scene.jsx';

import Style from '../styles/Main.less';
import HeaderStyle from '../styles/Header.less';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { collapse: true };
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    getContactMethods() {
        return (
            <Collapse open={this.state.collapse}>
                <div>
                    
                    <a className="twitter mx-3 h4 d-inline-block text-secondary" href="https://github.com/hanburger97" target="_blank">
                        <FontAwesomeIcon icon={faGithub} color='grey' />
                    </a>
                    <a className="twitter mx-3 h4 d-inline-block text-secondary" href="https://www.linkedin.com/in/hanburger/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} color='grey' />
                    </a>
                    <a className="twitter mx-3 h4 d-inline-block text-secondary" href="mailto:yhxiao@uwaterloo.ca" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} color='grey' />

                    </a>
                    <a className="facebook mx-3 h4 d-inline-block text-secondary" href="https://www.facebook.com/hanburger97" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} color='grey' />

                    </a>
                    <a className="twitter mx-3 h4 d-inline-block text-secondary" href="https://medium.com/@hanburger97" target="_blank">
                        <FontAwesomeIcon icon={faMedium} color='grey' />

                    </a>

                </div>
            </Collapse>
        )
    }

    render() {
        return (
            <div className={HeaderStyle.header}>
                    <Row>
                        <Col md={6} >
                        <div className={HeaderStyle.headerContent}>
                            <img src="public/favicon.png" style={{"height": "10vh", "width": "auto", "padding-bottom": "10px"}}/>
                            <br/>
                            <br/>
                            <h1>Han Xiao</h1>
                            
                            <h5>software engineer & pilot </h5>
                            <hr />
                            
                            {this.getContactMethods()}
                            <p>
                                I am a third-year software engineering student at the <strong>University of Waterloo</strong> in Canada 🇨🇦.
                                I am passionate about back-end software development and I have a particular interest in distributed systems and database
                                implementations. I am looking for impactful internships in back-end development.


                            </p> 
                            <p>
                                During my past internships at <strong>Shopify</strong>, an e-commerce platform, I've worked on prototyping a new proxy server for sharded
                                MySQL instances and made key contributions in the "Buy online, pickup in-store" feature.
                                I have also interned at <strong>North inc.</strong>, a Canadian start-up making smart glasses, where I worked in cloud-based authentications.
                            </p>
                            <p>
                                In my free time, I enjoy playing volleyball, the piano and flying. I am a fully licensed private and glider pilot since the age
                                of 16, feel free to reach out to me if you want to come fly with me! 🛫 
                            </p>
                            
                            <Button pill className={Style.Button} href="https://drive.google.com/file/d/1-r65YvF76GjrgQi4Lhljc9ru1foEjUaA/view?usp=sharing">
                                resume
                            </Button>
                            
                            
                        </div>
                        </Col>
                        <Col md={6}>
                            <img src="https://res.cloudinary.com/dhrmym6ox/image/upload/v1580508229/IMG_0362.jpg" className={HeaderStyle.heroImg} />
                        </Col>
                        
                    </Row>

                {/* <div className={HeaderStyle.diagonal}></div> */}
            </div>
        )
    }
}

export default Header;