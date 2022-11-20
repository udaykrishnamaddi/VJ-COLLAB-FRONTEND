import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from '../subComponents/Button';
import raiseHand from '../static/icons/raise-hand.png';
import Table from 'react-bootstrap/Table';

const CollabSkillsModal = (props) => {

    let [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const rating = [1, 2, 3, 4, 5]

    return (
        <div>
            <Button imgUrl={raiseHand} description="Check your replies here" textColor="white" bgColor="green" onClick={handleShow} />
            <Modal show={show} onHide={handleClose} backdrop="static" variant="top" centered scrollable>
                <Modal.Header closeButton>
                    <Modal.Title>Skill Set</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover className='text-center'>
                        <thead>
                            <tr>
                                <th>Skill</th>
                                <th>Proficiency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.skills.map((skill, key)=>(
                                <tr key={key}>
                                    <td>{skill}</td>
                                    <td>
                                        <select>
                                            <option value={0}>0</option>
                                            {rating.map((rate, key)=>(
                                                <option name={skill} key={key} value={key+1}>{rate}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button description="Cancel" textColor="white" bgColor="red" onClick={handleClose} />
                    <Button description="Submit" textColor="white" bgColor="green" onClick={handleClose} />
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CollabSkillsModal;