import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import signInIcon from './static/icons/google-signin.png';
import vjCollabIcon from './static/icons/vjcollab-icon.png';
import Button from './subComponents/Button';
import Home from './pages/Home'
import Collaboration from './pages/Collaboration';
import Forum from './pages/Forum';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>

      {/* Creating the Navbar */}
      <Navbar className='bg-dark' style={{zIndex: "1"}}>
        <Container>
          <Navbar.Brand href="/" className='text-white'>
            <img src={vjCollabIcon} style={{height: "50px", width: "50px"}} />
            <b style={{fontFamily: "monospace", fontSize: "xx-large"}}> VJ Collab</b>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/" className='home text-white'>Home</Nav.Link>
            <Nav.Link href="/collaboration" className='collab text-white'>Collab</Nav.Link>
            <Nav.Link href="/forum" className='forum text-white'>Forums</Nav.Link>
            <Button imgUrl={signInIcon} description="Log In" textColor="black" bgColor="white" />
          </Nav>
        </Container>
      </Navbar>

      {/* These are the routes for moving across the pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collaboration" element={<Collaboration name="Maddi Uday Krishna" username="20071A6627" />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>

    </div>
  );
}

export default App;

