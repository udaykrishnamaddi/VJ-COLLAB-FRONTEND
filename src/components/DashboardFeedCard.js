import React from 'react';
import Card from 'react-bootstrap/Card';
import userIcon from '../static/icons/user-icon.png';
import teamIcon from '../static/icons/team-icon.png';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import CollabSkillsModal from './CollabSkillsModal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../static/css/CollabFeedCard.css';

const DashboardFeedCard = (props) => {
    return (
    <div className='m-1'>
                
                <Card className='collabeefeedcard shadow'>
                            <Card.Header className=''>
                                <Card.Img className='img-fluid' variant='top' src={userIcon} style={{height: "45px", width: "45px", float: "left"}} />
                                <div className='float-start'>
                                    <h6 className='m-0'>Maddi Uday Krishna{props.name}</h6>
                                    <p className='m-0'>@20071A6627{props.username}</p>
                                </div>
                            </Card.Header>
                            {/* { props.img!=null ? <Card.Img variant="top" src={props.img} className="img-fluid" /> : <span></span> } */}
                            
                            <Card.Body className='p-0 mt-1'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col'>
                                            <Card.Title>
                                                <h3 className='m-1 p-2 text-center'>{props.title}</h3>
                                                <hr className='w-75 mx-auto m-0'></hr>
                                            </Card.Title>
                                            <p className='p-2 text-center'>{props.description}</p>
                                        </div>
                                        {/* <div className='col-6 d-flex'>
                                            <ListGroup className='mt-1'>
                                                <ListGroupItem>
                                                    <b>Date: </b>{props.endDate}
                                                    </ListGroupItem>
                                                <ListGroupItem>
                                                    <img src={teamIcon} style={{height: "25px", weight: "25px", float: "left"}} alt="" /> 
                                                    {props.required!=null ? props.required : '-'}
                                                </ListGroupItem>
                                                <ListGroupItem className='p-0'>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="light" className='w-100'>
                                                            Skills
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='text-center' variant="dark">
                                                            {props.skills.map((skill, key) => (
                                                                <Dropdown.Item key={key}>{skill}</Dropdown.Item>
                                                            ))}
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </div> */}
                                    </div>
                                </div>
                            </Card.Body>
                            <hr className='w-100 mx-auto m-0'></hr>

                            
                            <Card.Body>

                                        <div className=' p-2'>
                                            <ListGroup className='mt-1'>
                                                <ListGroupItem>
                                                    <b>Date: </b>{props.endDate}
                                                    </ListGroupItem>
                                                <ListGroupItem>
                                                    <b><img src={teamIcon} style={{height: "25px", weight: "25px", float: "left"}} alt="" />:  </b>{props.required!=null ? props.required : '-'}

                                                     
                                                    {/* {props.required!=null ? props.required : '-'} */}
                                                </ListGroupItem>
                                                <ListGroupItem className='p-0'>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="light" className='w-100'>
                                                            Skills
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='text-center' variant="dark">
                                                            {props.skills.map((skill, key) => (
                                                                <Dropdown.Item key={key}>{skill}</Dropdown.Item>
                                                            ))}
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </div>



                            </Card.Body>














                    <Card.Footer className='mt-1'>
                        <CollabSkillsModal skills={props.skills} />
                    </Card.Footer>
                </Card>
                    
                
            

    </div>



        
    );
}

export default DashboardFeedCard;