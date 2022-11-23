import React from 'react';
import CollabFeedCard from '../components/CollabFeedCard';
import vjHackathon from '../static/icons/vj-hackathon.webp';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CollabPostCard from '../components/CollabPostCard';

const Collaboration = (props) => {
    let data={
        name: props.name,
        username: props.username,
        img: vjHackathon,
        title: "Frontend Developer",
        description: "We are looking for frontend developer, our project is about developing a web site VjCollab, for students of our college.\
        Intersted students please click the collab button for join with us and the end date for applying is 1/9/2022.",
        endDate: "03-11-2022",
        required: 3,
        skills: ['HTML', 'ReactJS', 'NodeJS']
    }
    return (
        <div>
            <div className='text-center' style={{marginLeft: "15vw"}}>
                
                <CollabPostCard  />
            </div>
            <Row xs={1} md={3} className="g-4 m-3">
                <Col className='mx-auto'>
                    <CollabFeedCard {...data} />
                </Col>
                <Col className='mx-auto'>
                    <CollabFeedCard {...data} />
                </Col>
                <Col className='mx-auto'>
                    <CollabFeedCard {...data} />
                </Col>
                <Col className='mx-auto'>
                    <CollabFeedCard {...data} />
                </Col>
            </Row>             
        </div>
    );
}

export default Collaboration;
