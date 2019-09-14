import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Container, Badge, Button } from 'shards-react';
import { VerticalTimeline, VerticalTimelineElement, } from 'react-vertical-timeline-component';
import TimelineStyle from '../styles/Timeline.less'
import data from 'data';

class Timeline extends Component {
    render() {
        return (
            <div className={TimelineStyle.container}>

                <Row>

                    <Col md={12}>
                        <h3>Work experience</h3>
                        <VerticalTimeline>
                            {data.work.map((work, i) => {
                                return (

                                    <VerticalTimelineElement
                                        key={i}
                                        className="vertical-timeline-element--work"
                                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                                    >
                                        <h5 className={TimelineStyle.company}>{work.company}</h5>
                                        <Row>
                                        <span>{work.brief}</span> 
                                        </Row>
                                        <Row className={TimelineStyle.imageRow}>
                                            {work.svg ?
                                                (
                                                    <img src={work.svg} className={TimelineStyle.workImage} />
                                                )

                                                : (
                                                    <img src="" />
                                                )
                                            }
                                        </Row>
                                        <Row>
                                            <Col md={10}>
                                                {work.keywords.map((kw, e) => (
                                                    <Badge outline theme="primary" className={TimelineStyle.badge}>
                                                        {kw}
                                                    </Badge>
                                                ))}
                                            </Col>
                                            <Col md={2}>
                                                <div className={TimelineStyle.readMore}>
                                                    <Link to={`/work/${work.id}`}>More</Link>

                                                </div>
                                            </Col>
                                        </Row>



                                    </VerticalTimelineElement>


                                )
                            })}
                        </VerticalTimeline>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Timeline;