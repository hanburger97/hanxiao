import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium, faGoodreads, faAutoprefixer } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/fontawesome-free-solid';

import HeaderStyle from '../styles/Header.less';

import { Link } from './Common.jsx';
import Palette from '../global.js';

class Header extends Component {

    getContactMethods() {
        return (
            <div>
                
                <a className="mx-2 h5 d-inline-block" href="https://drive.google.com/file/d/1-r65YvF76GjrgQi4Lhljc9ru1foEjUaA/view?usp=sharing" target="_blank">
                    <FontAwesomeIcon icon={faFile} color={Palette.lightGrey} />
                </a>
                <a className="mx-2 h5 d-inline-block" href="https://github.com/hanburger97" target="_blank">
                    <FontAwesomeIcon icon={faGithub} color={Palette.lightGrey} />
                </a>
                <a className="mx-2 h5 d-inline-block" href="https://www.linkedin.com/in/hanburger/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} color={Palette.lightGrey} />
                </a>
                <a className="mx-2 h5 d-inline-block" href="https://medium.com/@hanx.ca" target="_blank">
                    <FontAwesomeIcon icon={faMedium} color={Palette.lightGrey} />
                </a>
                <a className="mx-2 h5 d-inline-block" href="mailto:yhxiao@uwaterloo.ca" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} color={Palette.lightGrey} />
                </a>
                <a className="mx-2 h5 d-inline-block" href="https://www.goodreads.com/user/show/113736962-han-xiao" target="_blank">
                    <FontAwesomeIcon icon={faGoodreads} color={Palette.lightGrey} />
                </a>

            </div>
        )
    }

    render() {
        return (
            <div className={HeaderStyle.header}>
               <Row>
                <Col md={{span: 5, offset: 1}} sm={12} className="container">
                    <div className={HeaderStyle.headerContent}>
                        <h1>Han Xiao</h1>
                        
                        <h5>software engineer & pilot </h5>                            
                        <br/>
                        <p>
                            Third-year software engineering student at the <Link href="https://uwaterloo.ca/" target="_blank">University of Waterloo, </Link>
                            passionate about distributed systems, SRE and databases. I am  
                            looking for impactful internships in fast growing companies.
                        </p> 
                        <p>
                            Previous experiences includes production engineering and back-end development at <Link href="https://www.shopify.ca/" target="_blank">Shopify</Link>, cloud development at <Link href="https://www.bynorth.com/" target="_blank">North </Link>(Thalmic Labs) and data engineering at Intact Insurance's data lab.
                        </p>
                        <p>
                            I am a pilot and an aviation lover. I am always seeking new adventures and thrills in travelling around the world, in meeting new people and in trying new experiences. In my free time, I love to 
                             <Link href="https://www.goodreads.com/user/show/113736962-han-xiao" target="_blank"> read </Link> and  <Link href="https://medium.com/@hanx.ca" target="_blank">write.</Link> I also enjoy snowboarding, volleyball and rugby. 
                        </p>
                        <p>
                            I have recently created a live <Link href="/#/wellness">dashboard</Link> to keep track of my health and wellness profile during the COVID-19 quarantine.
                        </p>
                        {this.getContactMethods()}
                        
                        
                    </div>
                </Col>
                <Col md={6} sm={12}>

                    <img src="https://res.cloudinary.com/dhrmym6ox/image/upload/v1580508229/IMG_0362.jpg" style={{height: "13rem", width: "auto", left: "7rem", top: "13rem", position:"absolute", zIndex: 3, boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.4)"}} />
                    <img src="https://res.cloudinary.com/dhrmym6ox/image/upload/v1587852545/italy.jpg" style={{height: "10rem", width: "auto", left: "12rem", top: "7rem", position:"absolute", zIndex: 1, boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.4)"}} />
                    <img src="https://res.cloudinary.com/dhrmym6ox/image/upload/v1587573344/IMG_0642.jpg" style={{height: "15rem", width: "auto", left: "16rem", top: "16rem", position:"absolute", zIndex: 2, boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.4)"}} />
                    <img src="https://res.cloudinary.com/dhrmym6ox/image/upload/v1587575787/world.svg" style={{height: "30rem", width: "auto", zIndex: 0, left: "0rem", top: "4rem",position: "absolute"}}/>
                </Col>
            </Row>     
                   
                 

            </div>
        )
    }
}

export default Header;