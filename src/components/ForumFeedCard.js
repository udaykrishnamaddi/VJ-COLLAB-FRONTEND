import React from 'react';
import Card from 'react-bootstrap/Card';
import userIcon from '../static/icons/user-icon.png';
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
                <Card.Body className='p-0 mt-1'>
                <Card.Title>
                    <h3 className='m-1'>{props.title}</h3>
                </Card.Title>
                </Card.Body>
                <Card.Footer className='mt-1'>
                    <div className='d-flex justify-content-left'>
                        <h6>12 comments</h6>
                    </div>
                    <div className='d-flex justify-content-left'>
                        <Button variant="primary">Answer</Button>
                    </div>
                </Card.Footer>
            </Card>
            <hr className='w-75 mx-auto m-0'style={{
                color: 'black',
                backgroundColor: 'black',
                height:'3px'
                }}>    
            </hr>
        </div>
    );
}

export default ForumFeedCard;
