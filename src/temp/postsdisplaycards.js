import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modall from './modal.js';

function WithHeaderStyledExample() {

  return (

    <div className='align-items-center m-5'>
    <h1>Your feed!</h1>

    <Card className='m-5 align-items center '>
       



       <Card.Header className='bg-success'>
        <Row>
        
        <h5 as={Col} className=" p-2">Maddi Uday Krishna</h5>


        </Row>
        

        </Card.Header>
        <Card.Header>udaykrishna1312@gmail.com</Card.Header>
      
      <Card.Body>
        <Card.Title>Frontend Developer</Card.Title>
        <Card.Text>
          We are looking for frontend developer, our project is about developing a web site VjCollab, for students of our college.
          Intersted students please click the collab button for join with us and the end date for applying is 1/9/2022.
        </Card.Text>

        <Modall/>
        {/* <Button variant="primary">Collab</Button> */}
      </Card.Body>
    </Card>


    </div>

    
  );
}

export default WithHeaderStyledExample;