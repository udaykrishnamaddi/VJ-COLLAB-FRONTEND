import React from 'react';
import Card from 'react-bootstrap/Card';
import userIcon from '../static/icons/user-icon.png';
import teamIcon from '../static/icons/team-icon.png';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
// import CollabSkillsModal from './CollabSkillsModal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



const ForumFeedCardDiv = (props) => {
    return (
        
            <Container fluid="md" className='forumeee p-3' >
            <Row>
                <Col >
                    <hr/>
                    <h6 className=' '>{props.name}</h6>
                    <p className=' '>@{props.username}</p>
                    <hr/>
                    <h3 className='m-1'>{props.title}</h3>
                    <br/>
                    <h6>12 comments</h6>
                    <Button variant="success">Answer</Button>


                </Col>
            </Row>
            <hr/>
            </Container>


        

        




        // <div  className='container m-3'>
        //     <h6 className=' '>{props.name}</h6>
        //     <p className=' '>@{props.username}</p>
        //     <h3 className='m-1'>{props.title}</h3>
        //     <h6>12 comments</h6>
        //     <Button variant="primary">Answer</Button>

        // </div>























        // <div>
        //     <Card className='m-5 shadow'>
        //         <Card.Header>
        //             <Card.Img className='img-fluid' variant='top' src={userIcon} style={{height: "45px", width: "45px", float: "left"}} />
        //             <div className='float-start'>
        //                 <h6 className='m-0'>{props.name}</h6>
        //                 <p className='m-0'>@{props.username}</p>
        //             </div>
        //         </Card.Header>
        //         {/* { props.img!=null ? <Card.Img variant="top" src={props.img} className="img-fluid" /> : <span></span> } */}
        //         <Card.Body className='p-0 mt-1'>
        //         <Card.Title>
        //             <h3 className='m-1'>{props.title}</h3>
        //             {/* <hr className='w-75 mx-auto m-0'></hr> */}
        //         </Card.Title>


                    
        //         </Card.Body>
        //         <Card.Footer className='mt-1'>
        //             <div className='d-flex justify-content-left'>
        //                 <h6>12 comments</h6>

        //             </div>
        //             <div className='d-flex justify-content-left'>
        //                 <Button variant="primary">Answer</Button>

        //             </div>
        //             {/* <CollabSkillsModal skills={props.skills} /> */}
        //         </Card.Footer>
        //     </Card>
        //     <hr className='w-75 mx-auto m-0'style={{
        //     color: 'black',
        //     backgroundColor: 'black',
        //     height:'3px'
        // }} ></hr>


        // </div>
    );
}

export default ForumFeedCardDiv;