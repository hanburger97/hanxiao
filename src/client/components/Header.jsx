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
        this.state = { collapse: false };
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    getContactMethods() {
        return (
            <Collapse open={this.state.collapse}>
                <div className="p-3 mt-2 rounded">
                    <span>Feel free to reach out!</span>

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
                <div className={HeaderStyle.headerContent}>
                    <Row>
                        <Col md={3}>
                            <Canvas className={HeaderStyle.shard} camera={{fov: 45, near: 1, far: 1000}} pixelRatio={window.devicePixelRatio}>
                                <Scene />
                            </Canvas>
                        </Col>
                        <Col md={5} >
                            <h1>Han Xiao</h1>
                            <br />
                            <p>
                                Aspriring software engineer interested in cloud development, computer networks and distributed computing.    
                            </p>  
                            
                            <Button pill className={Style.Button} href="https://github.com/hanburger97">
                                Github
                            </Button>
                            <Button pill outline className={Style.ButtonSecondary} onClick={this.toggle}>
                                Get in touch
                            </Button>
                            
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col md={{size: 5, offset:3}} >
                            {this.getContactMethods()}

                        </Col>
                    </Row>

                </div>
                <div className={HeaderStyle.diagonal}></div>
            </div>
        )
    }
}

export default Header;