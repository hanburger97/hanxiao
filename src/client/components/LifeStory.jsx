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
                    
                    <Col md={8}>
                    <h3>Life Story</h3>
                        <p>
                        At the age of 17, I conquered my fear of heights by obtaining both my glider and private pilot licenses. 
                        By becoming a pilot, and by overcoming endless nights of anxiety, tears and sweat, I learned that the fear of failure 
                        was my greatest opponent.
                        </p>

                        <p>
                        When I was 18, I co-founded a non-for-profit organization that raises awareness for a heart disease affecting children.
                        It turned out to be a failed venture, however, through long nights of heated discussions and compromises,
                        I learned the value of making an impact and the hard work that goes with it.
                        </p>

                        <p>
                        Emboldened by my fearlessness to fail, I now aspire to become a software engineer and currently study at the 
                        University of Waterloo 🇨🇦. 
                        I hope that my relentlessness to bow to failures will make me grow and become a better engineer.
                        <br />


                        </p>

                    </Col>
                    <Col md={4}>
                        <img className={style.spaceImg} src="https://res.cloudinary.com/dhrmym6ox/image/upload/v1561591612/spaceman.png" alt="" />
                    </Col>

                </Row>

            </div>
        )
    }
}

export default LifeStory;