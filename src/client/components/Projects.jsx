import React, { Component } from 'react';
import data from 'data';
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button,
    Container,
    Badge
} from "shards-react";
import { Row } from 'react-bootstrap';


class Projects extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {data.projects.map((project, i) => (
                        <Card style={{ maxWidth: "23vw", margin: "0.7rem" }}>
                            <CardHeader></CardHeader>
                            <CardImg src="https://place-hold.it/300x200" />
                            <CardBody>
                                <CardTitle>{project.name}</CardTitle>
                                <p>{project.description}</p>
                                {project.keywords.map((keyword, kw) => (
                                    <Badge outline theme="light">
                                        {keyword}
                                    </Badge>
                                ))}
                                <br /><br />
                                <Button pill>Read more &rarr;</Button>
                            </CardBody>
                            <CardFooter></CardFooter>
                        </Card>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default Projects;