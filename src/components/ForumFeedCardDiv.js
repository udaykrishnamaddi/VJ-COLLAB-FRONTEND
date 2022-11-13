import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const ForumFeedCardDiv = (props) => {
    return (
        <Container fluid="md" className='forumeee p-3' >
            <Row>
                <Col >
                    <hr />
                    <h6 className=' '>{props.name}</h6>
                    <p className=' '>@{props.username}</p>
                    <hr />
                    <h3 className='m-1'>{props.title}</h3>
                    <br />
                    <h6>12 comments</h6>
                    <Button variant="success">Answer</Button>
                </Col>
            </Row>
            <hr />
        </Container>
    );
}

export default ForumFeedCardDiv;