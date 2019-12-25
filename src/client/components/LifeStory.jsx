import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import style from '../styles/LifeStory.less';

class LifeStory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.container}>
                


                <Row>
                    
                    <Col md={7}>
                    <h3>Life Story</h3>
                        <p>
                        At the age of 17, I conquered my fear of heights by becoming a licensed glider and private pilot.
                        Slowly, I have learned to conquer my fear of failure and overcome my anxiety. Flying through the sky has emboldened me to conquer 
                        any challenge with a growth mindset.
                        </p>


                        <p>
                        I now aspire to become a software engineer and currently study at the <strong>University of Waterloo</strong>  🇨🇦. 
                        <br/>
                        During my internship at <strong>Shopify</strong>, I have worked on core back-end development in Ruby on Rails and Go. I have also worked on
                        prototyping a new proxy SQL server for sharded databases. The latter really gave me an overview of distributed systems and databases and made me fall
                        in love with the topics. 
                        <br/>
                        At <strong>North</strong>, formerly known as Thalmic Labs, I have worked on building a new role-based OAuth cloud authentication systems for smart glasses.
                        I have also worked at <strong>Intact Insurance</strong> as a data engineer in the machine learning lab and at <strong>Nuance</strong> as a testing intern.
                        <br />


                        </p>

                    </Col>
                    <Col md={5}>
                        <img className={style.spaceImg} src="https://res.cloudinary.com/dhrmym6ox/image/upload/v1577305498/Image.png" alt="" />
                    </Col>

                </Row>

            </div>
        )
    }
}

export default LifeStory;