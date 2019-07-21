import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../styles/MotivationPage.less';

class MotivationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.page}>
                <Container>

                    <Row>
                     <Col md={8} >
                     <h2>You need to grind Han!</h2>
                        <p>Remember your goals and that you are extremely lucky. Life has given you everything you need to succeed,
                            the only thing needed from you is some <strong>hard work, grit  & sacrifices</strong>. 
                            <br/>
                            You can do it buddy 💪💪💪, just grind and you'll make it!
                        </p>
                     </Col>
                    </Row>
                    <Row>
                        <Col md={{span: 8, offset: 4}}>
                            <img className={style.grindImg} src="https://res.cloudinary.com/dhrmym6ox/image/upload/v1561591612/untitled_artwork__2__4x.png"/>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default MotivationPage;