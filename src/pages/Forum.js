import React from 'react';
import ForumFeedCardDiv from '../components/ForumFeedCardDiv'
import reactimage from '../static/icons/reactimage.webp';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Forum = (props) => {
    let data={
        name: "Maddi Uday Krishna",
        username: "20071A6627",
        img: reactimage,
        title: "How does react work?How do i conditionally render react components?",
        description: "Description about your doubts.",
        required: 3,
        skills: ['HTML', 'ReactJS', 'NodeJS']
    }
    return (
        <div className='forumee'>
            <h1 className='text-center m-4'>Welcome to Discussion Portal.</h1>
            <Row  xs={1} md={1} className="g-4 m-3">
                <Col>
                    <ForumFeedCardDiv {...data}/>
                </Col>
                <Col>
                    <ForumFeedCardDiv {...data}/>
                </Col>
                <Col>
                    <ForumFeedCardDiv {...data}/>
                </Col>
                <Col>
                    <ForumFeedCardDiv {...data}/>
                </Col>
            </Row>
        </div>
    );
}

export default Forum;

