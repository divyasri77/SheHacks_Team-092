import React from 'react'
import {Card,Form,Row,Col,Container,Button} from 'react-bootstrap'

export default function ConvertToPPT() {
    return (
        <Container fluid>
            <Row>
                <Col className="d-flex align-items-center mt-5 justify-content-around">
                    <Card style={{width:"max-content"}}>
                        <Card.Body>
                            <Form  method="get" action="/flask/">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Topic</Form.Label>
                                    <Form.Control type="text" name="topic"/>
                                    <Form.Text className="text-muted">
                                        Please fill your topic above.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>User</Form.Label>
                                    <Form.Control type="text" name="user" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Generate
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>            
            </Row>
            
        </Container>
    )
}
