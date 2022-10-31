import React from 'react';
import Button from '../subComponents/Button';
import addIcon from '../static/icons/add-icon.png';
import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
// import CollabPostForm from './CollabPostForm';
import ForumPostForm from './ForumPostForm';
const ForumPostCard = () => {

    let [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    return (
        <div>
            <Button imgUrl={addIcon} description="Ask a Question" bgColor="#109c5b" onClick={handleShow} />

            {/* Modal for collaboration post form */}
            <Modal size="lg" show={show} onHide={handleClose} backdrop="static" scrollable centered>
                <Modal.Header closeButton>
                    <Modal.Title>Post your doubts here</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ForumPostForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button description="Discard" textColor="white" bgColor="red" onClick={handleClose} />
                    <Button description="Post" textColor="white" bgColor="green" onClick={handleClose} />
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ForumPostCard;
