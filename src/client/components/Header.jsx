import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import HeaderStyle from '../styles/Header.less';
import { Button, Collapse } from "shards-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid'

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
                    <span>Here are the ways you can reach out to me</span>

                    <a className="twitter mx-3 h4 d-inline-block text-secondary" href="https://www.linkedin.com/in/hanburger/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} color='grey' />
                    </a>
                    <a className="twitter mx-3 h4 d-inline-block text-secondary" href="mailto:yhxiao@uwaterloo.ca" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} color='grey' />

                    </a>
                    <a className="github mx-3 h4 d-inline-block text-secondary" href="https://github.com/hanburger97" target="_blank">
                        <FontAwesomeIcon icon={faGithub} color='grey' />

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
                            <img className={HeaderStyle.shard} src="public/img/planet_orbit.gif" />
                        </Col>
                        <Col md={5} >
                            <h1>Han Xiao</h1>
                            <br />
                            <p>
                                Aspriring software engineer interested in cloud development, computer networks and distributed computing.    
                            </p>  
                            
                            <Button pill href="https://github.com/hanburger97" style={{margin: "5px"}}>
                                Github
                            </Button>
                            <Button pill outline onClick={this.toggle}>
                                Get in touch
                            </Button>
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