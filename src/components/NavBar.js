import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  return (
    <Navbar fixed="top" bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img
                src = {require('../assets/logo/logo.png')} 
                // width="30"
                height="120"
                className="d-inline-block align-top"
                alt=""
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about" >About Us</Nav.Link>
            <Nav.Link href="#services" >Services</Nav.Link>
            <Nav.Link href="#contact" >Contact Us</Nav.Link>
            <Nav.Link href="#faq" >FAQ</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;