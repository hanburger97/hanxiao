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
                        I was afraid of heights growing up, then I decided  that I wanted to conquer this 
                        fear by flying a plane. By age 17, I obtained both my glider and private pilot licenses. 
                        To say that it happened without a hitch and without tears, sweat and anxiety would be a 
                        big lie. One thing I learned from becoming a pilot is that there are no such things as 
                        "free lunches" in life. Everything requires sacrifice and effort, and, of course, 
                        a bit of luck.

                        </p>

                        <p>
                            When I was 18, I co-founded a non-for-profit organization that raises awareness for a heart disease affecting children.
                            Through that roller-coaster experience, I learned that making an impact is easier said than done. And I learned that 
                            after long nights of hard work, paperworks, heated discussions and compromises.
                        </p>

                        <p>
                        As I moved on to the next chapter of my life, 
                        I now aspire to become a software engineer and currently study at the 
                        University of Waterloo 🇨🇦. 
                        I believe that my grit and relentlessness facing hard problems 
                        will help me make a positive impact using technology. 
                        Using the tools and experiences learned from my past experiences, 
                        I am ready to put in the necessary effort and passion into conquering 
                        whatever next that comes through my door. 
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