import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Collapse } from "shards-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium, faGoodreads } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/fontawesome-free-solid';

import HeaderStyle from '../styles/Header.less';

import { Link } from './Common.jsx';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { collapse: true };
    }
    getContactMethods() {
        return (
            <Collapse open={this.state.collapse}>
                <div>
                    
                    <a className="twitter mx-3 h4 d-inline-block text-secondary" href="https://drive.google.com/file/d/1-r65YvF76GjrgQi4Lhljc9ru1foEjUaA/view?usp=sharing" target="_blank">
                        <FontAwesomeIcon icon={faFile} color='grey' />
                    </a>
                    <a className="twitter mx-3 h4 d-inline-block text-secondary" href="https://github.com/hanburger97" target="_blank">
                        <FontAwesomeIcon icon={faGithub} color='grey' />
                    </a>
                    <a className="twitter mx-3 h4 d-inline-block text-secondary" href="https://www.linkedin.com/in/hanburger/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} color='grey' />
                    </a>
                    <a className="twitter mx-3 h4 d-inline-block text-secondary" href="https://medium.com/@hanx.ca" target="_blank">
                        <FontAwesomeIcon icon={faMedium} color='grey' />
                    </a>
                    <a className="twitter mx-3 h4 d-inline-block text-secondary" href="mailto:yhxiao@uwaterloo.ca" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} color='grey' />
                    </a>
                    <a className="twitter mx-3 h4 d-inline-block text-secondary" href="https://www.goodreads.com/user/show/113736962-han-xiao" target="_blank">
                        <FontAwesomeIcon icon={faGoodreads} color='#346354' />
                    </a>

                </div>
            </Collapse>
        )
    }

    render() {
        return (
            <div className={HeaderStyle.header}>
                    
                <Col md={{span: 4, offset: 2}} sm={12} className="container">
                <div className={HeaderStyle.headerContent}>
                    {/* <img src="public/favicon.png" style={{"height": "10vh", "width": "auto", "paddingBottom": "10px"}}/> */}
                    <br/>
                    <br/>
                    <h1>Han Xiao</h1>
                    
                    <h5>software engineer & pilot </h5>                            
                    <p>
                        Third-year software engineering student at the <Link href="https://uwaterloo.ca/" target="_blank">University of Waterloo, </Link>
                        passionate about distributed systems, SRE and databases and  
                        looking for impactful internships in fast growing companies.


                    </p> 
                    <p>
                        Previous experience includes production engineering and back-end at <Link href="https://www.shopify.ca/" target="_blank">Shopify</Link>, cloud back-end at <Link href="https://www.bynorth.com/" target="_blank">North </Link>(Thalmic Labs) and data engineering at Intact Insurance's data lab.
                    </p>
                    <p>
                        I am a pilot and aviation lover. I am always seeking new adventures in travelling, in meeting new people and in trying new experiences. In my free time you can find
                        me <Link href="https://www.goodreads.com/user/show/113736962-han-xiao" target="_blank">reading </Link> and  <Link href="https://medium.com/@hanx.ca" target="_blank">writing</Link>.
                    </p>
                    {this.getContactMethods()}
                    
                    
                </div>
                </Col>
                <Col md={2} sm={12}>


                </Col>
                   
                 

            </div>
        )
    }
}

export default Header;