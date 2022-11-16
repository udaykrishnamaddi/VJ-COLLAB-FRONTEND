import React from 'react';
import {Button} from 'react-bootstrap';
import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import CollabPostForm from './CollabPostForm';

const CollabPostCard = () => {

    let [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    return (
        <div>
            <div className='text-center' >
                <h1 className='d-inline-block text-center'>Your Feed.</h1>
                <Button className='float-end mt-2' style={{marginRight: "15px"}} onClick={handleShow}> + Post Collaboration</Button>
            </div>
            
            <Modal size="lg" show={show} onHide={handleClose} backdrop="static" scrollable centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CollabPostForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-danger' onClick={handleClose}>Discard</Button>
                    <Button className='btn btn-success ' onClick={handleClose}>Post</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CollabPostCard;
