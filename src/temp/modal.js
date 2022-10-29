import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


function Modall() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Collab
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title>Frontend Developer</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <h5>Skills select chesuko.</h5>
            <Form as={Col} className='form-control  p-2'>
                    {/* <h6>Select skills</h6> */}
                    <Form.Label>Skills</Form.Label>
                    <Form.Check className='w-25'
                      type='checkbox'
                      label={`C++`}

                    />
                    <Form.Check className='w-25'
                      type='checkbox'
                      label={`Java`}

                    />
                    <Form.Check className='w-25'
                      type='checkbox'
                      label={`Python`}

                    />
                    <Form.Check className='w-25'
                      type='checkbox'
                      label={`Html`}

                    />
                    <Form.Check className='w-25'
                      type='checkbox'
                      label={`React`}

                    />
              </Form>
        </Modal.Body>
        <Modal.Footer >
          <Button className='bg-warning' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modall;
