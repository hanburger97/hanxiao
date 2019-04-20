import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import data from 'data';
import { Badge, Card } from 'shards-react';
import style from '../styles/WorkPage.less';
import { Link } from 'react-router-dom';

class WorkPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workData: {}
        }
    }

    componentWillMount() {
        const works = data.work;
        works.map((w) => {
            if (this.props.match.params.workId === w.id) {
                this.setState({
                    workData: w
                })
            }
        })
    }

    render() {
        return (
            <div className={style.page}>
                <Card className={style.card}>
                    <Container>
                        <Row>
                            <div className={style.back}>
                                <Link to='/'>Back</Link>
                            </div>
                        </Row>
                        <Row>
                            <h3>{this.state.workData.company}</h3>
                            <p>{this.state.workData.company_info}</p>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <strong>{this.state.workData.position}</strong>
                                <p>{this.state.workData.dates}</p>
                                {this.state.workData.keywords.map((kw, i) => (
                                    <Badge theme="light">
                                        {kw}
                                    </Badge>

                                ))}
                            </Col>
                            <Col md={9}>
                                <h4>Impact</h4>
                                <p>{this.state.workData.impact}</p>
                                <br />
                                <h4>Description</h4>
                                <p>{this.state.workData.description}</p>
                            </Col>

                        </Row>
                        {console.log(this.state.workData)}
                    </Container>
                </Card>
            </div>
        )
    }
}

export default WorkPage;