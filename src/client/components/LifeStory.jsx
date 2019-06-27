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
                <div className={style.title}>
                    <h3>Life Story</h3>
                </div>


                <Row>
                    <Col md={4}>
                        <img className={style.spaceImg} src="https://res.cloudinary.com/dhrmym6ox/image/upload/v1561591612/spaceman.png" alt="" />
                    </Col>
                    <Col md={8}>

                        <p>
                            I was afraid of heights and one day
                            when I was 15, I decided I wanted to conquer my fear and fly. By age 17 I obtained both my glider and private pilot
                            licenses. To say that it happened without a hitch and without tears, sweat and anxiety would be a lie.
                            One thing I learned from becoming a pilot is that, there are no such things as "free lunches" in life. Everything requires
                            sacrifice and effort, and, of course, a bit of luck.
                        </p>

                        <p>
                            When I was an edgy teenager at 18, I co-founded a non-for-profit organization that raises awareness for a heart disease affecting children.
                            Through that roller-coaster experience, I learned that making an impact is easier said than done. And I learned that lesson
                            through hard work, paperworks, heated discussions and compromises.
                        </p>

                        <p>
                            As I moved on to the next chapter of my life, I now aspire to become a software engineer, I believe that my love for problem solving
                            and grit will help me make a positive impact in technology.
                            I currently study at the University of Waterloo in Canada 🇨🇦 in software engineering with a minor in computational mathematics.

                            <br />


                        </p>

                    </Col>

                </Row>

            </div>
        )
    }
}

export default LifeStory;