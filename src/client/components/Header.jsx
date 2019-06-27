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

    render() {
        return (
            <div className={HeaderStyle.header}>
                <div className={HeaderStyle.headerContent}>
                    <Row>
                        <Col md={7} >
                            <h1>Han Xiao</h1>
                            <br />
                            Aspriring software engineer & week-end pilot
                            <br />
                            <br />
                            {/* <Button pill href="https://drive.google.com/file/d/1CsGcQbhzSFI9opxw30pe6dJtCM3wvoKc/view?usp=sharing" > Resume </Button> */}
                            <Button pill outline onClick={this.toggle}>
                                Get in touch
                            </Button>
                            <Collapse open={this.state.collapse}>
                                <div className="p-3 mt-2 rounded">
                                    <span>Here are the ways you can reach out to me</span>

                                    <a class="twitter mx-3 h4 d-inline-block text-secondary" href="https://www.linkedin.com/in/hanburger/" target="_blank">
                                        <FontAwesomeIcon icon={faLinkedin} color='grey' />
                                    </a>
                                    <a class="twitter mx-3 h4 d-inline-block text-secondary" href="mailto:yhxiao@uwaterloo.ca" target="_blank">
                                        <FontAwesomeIcon icon={faEnvelope} color='grey' />

                                    </a>
                                    <a class="github mx-3 h4 d-inline-block text-secondary" href="https://github.com/hanburger97" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} color='grey' />

                                    </a>

                                    <a class="facebook mx-3 h4 d-inline-block text-secondary" href="https://www.facebook.com/hanburger97" target="_blank">
                                        <FontAwesomeIcon icon={faFacebook} color='grey' />

                                    </a>
                                    <a class="twitter mx-3 h4 d-inline-block text-secondary" href="https://medium.com/@hanburger97" target="_blank">
                                        <FontAwesomeIcon icon={faMedium} color='grey' />

                                    </a>

                                </div>
                            </Collapse>
                        </Col>
                        <Col md={4}>

                        </Col>
                    </Row>
                </div>
                <div className={HeaderStyle.diagonal}></div>
            </div>
        )
    }
}

export default Header;