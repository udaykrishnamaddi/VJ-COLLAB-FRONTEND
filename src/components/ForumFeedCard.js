// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { CardGroup } from 'react-bootstrap';

// const ForumFeedCard = () => {
//     return (
//         <div className='align-items-center m-5'>
//             <CardGroup>
//                 <Card className='m-5' style={{ width: '18rem' }}>
//                     <Row>
//                         <Col>
//                             <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
//                         </Col>

//                         <Col>
//                             <Card.Body>
//                                 <Card.Title>How does react work?</Card.Title>
//                                 <Card.Text>
//                                     Description about your doubts.
//                                 </Card.Text>
//                                 <Button variant="primary">Comment</Button>
//                             </Card.Body>

//                         </Col>

//                     </Row>
                    
                    
                
//                 </Card>
//                 <Card className='m-5' style={{ width: '18rem' }}>
//                     <Row>
//                         <Col>
//                             <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
//                         </Col>

//                         <Col>
//                             <Card.Body>
//                                 <Card.Title>How does react work?</Card.Title>
//                                 <Card.Text>
//                                     Description about your doubts.
//                                 </Card.Text>
//                                 <Button variant="primary">Comment</Button>
//                             </Card.Body>

//                         </Col>

//                     </Row>
                    
                    
                
//                 </Card>
//                 <Card className='m-5' style={{ width: '18rem' }}>
//                     <Row>
//                         <Col>
//                             <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
//                         </Col>

//                         <Col>
//                             <Card.Body>
//                                 <Card.Title>How does react work?</Card.Title>
//                                 <Card.Text>
//                                     Description about your doubts.
//                                 </Card.Text>
//                                 <Button variant="primary">Comment</Button>
//                             </Card.Body>

//                         </Col>

//                     </Row>
                    
                    
                
//                 </Card>

//             </CardGroup>
            
//         </div>
//     );
// }

// export default ForumFeedCard;




import React from 'react';
import Card from 'react-bootstrap/Card';
import userIcon from '../static/icons/user-icon.png';
import teamIcon from '../static/icons/team-icon.png';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
// import CollabSkillsModal from './CollabSkillsModal';
import Button from 'react-bootstrap/Button';



const ForumFeedCard = (props) => {
    return (
        <div>
            <Card className='m-5 shadow'>
                <Card.Header>
                    <Card.Img className='img-fluid' variant='top' src={userIcon} style={{height: "45px", width: "45px", float: "left"}} />
                    <div className='float-start'>
                        <h6 className='m-0'>{props.name}</h6>
                        <p className='m-0'>@{props.username}</p>
                    </div>
                </Card.Header>
                {/* { props.img!=null ? <Card.Img variant="top" src={props.img} className="img-fluid" /> : <span></span> } */}
                <Card.Body className='p-0 mt-1'>
                <Card.Title>
                    <h3 className='m-1'>{props.title}</h3>
                    {/* <hr className='w-75 mx-auto m-0'></hr> */}
                </Card.Title>


                    
                </Card.Body>
                <Card.Footer className='mt-1'>
                    <div className='d-flex justify-content-left'>
                        <h6>12 comments</h6>

                    </div>
                    <div className='d-flex justify-content-left'>
                        <Button variant="primary">Answer</Button>

                    </div>
                    {/* <CollabSkillsModal skills={props.skills} /> */}
                </Card.Footer>
            </Card>
            <hr className='w-75 mx-auto m-0'style={{
            color: 'black',
            backgroundColor: 'black',
            height:'3px'
        }} ></hr>


        </div>
    );
}

export default ForumFeedCard;
