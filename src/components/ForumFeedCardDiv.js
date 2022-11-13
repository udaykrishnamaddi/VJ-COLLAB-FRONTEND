import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'; 

const ForumFeedCardDiv = (props) => {
    return (
        // <Container fluid="md" className='forumeee p-3' >
        //     <Row>
        //         <Col >
        //             <hr />
        //             <h6 className=' '>{props.name}</h6>
        //             <p className=' '>@{props.username}</p>
        //             <hr />
        //             <h3 className='m-1'>{props.title}</h3>
        //             <br />
        //             <h6>12 comments</h6>
        //             <Link to="/commentspage">
        //                 <Button variant="success">Answer</Button>
        //             </Link>
        //         </Col>
        //     </Row>
        //     <hr />
        // </Container>

        <Container>
            <div className='m-5 border shadow border-rounded p-2 w-75 mx-auto'>
                <div className='header h-25 ms-2'>
                    <p className='m-0'><b>{props.name}</b></p>
                    <p>@{props.username}</p>
                </div>
                <div className='body mt-3 ms-3'>
                    <h4>{props.title}</h4>
                </div>
            </div>
        </Container>



    );
}

export default ForumFeedCardDiv;