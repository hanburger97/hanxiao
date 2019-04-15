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
                    {console.log(data.work)}
                    <Col md={12}>
                        <VerticalTimeline>
                            {data.work.map((work, i) => {
                                return (
                                    <VerticalTimelineElement
                                        key={i}
                                        className="vertical-timeline-element--work"
                                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                                    >
                                        <h5>{work.company}</h5>
                                        <Row>
                                            <Col md={4}>
                                                {work.svg ?
                                                    (
                                                        <img src={work.svg} className={TimelineStyle.workImage} />
                                                    )

                                                    : (
                                                        <img src="" />
                                                    )

                                                }
                                            </Col>
                                            <Col md={8}>


                                                <span>{work.brief}</span> <br />


                                                {work.keywords.map((kw, e) => (
                                                    <Badge outline theme="light" className={TimelineStyle.badge}>
                                                        {kw}
                                                    </Badge>
                                                ))}
                                            </Col>

                                        </Row>


                                        <div className={TimelineStyle.readMore}>
                                            <Link to={`/work/${work.id}`}> Read More</Link>

                                        </div>
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