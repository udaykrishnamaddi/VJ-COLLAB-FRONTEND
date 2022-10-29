import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
  return (
    <div className='p-5'>
          <h1 className='align-items-center m-5'>Create a Post</h1>

        <Form className='form-control p-5'>

        <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Contest Name</Form.Label>
            <Form.Control placeholder="Enter Contest Name" />
          </Form.Group>



          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Domain</Form.Label>
              <Form.Control placeholder="Enter Domain" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date"placeholder="Enter end date" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
              <Form as={Col} className='form-control m-2 p-2'>
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




              <Form as={Col} className='form-control p-2 m-2'>
                  <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Team Size</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Select>
                </Form.Group>

              </Form>

          </Row>

          
          
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Description</Form.Label>
            <Form.Control placeholder="Enter about project description" />
          </Form.Group>

          

          <Form.Group className="mb-3 w-25" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

    </div>
    
  );
}

export default GridComplexExample;