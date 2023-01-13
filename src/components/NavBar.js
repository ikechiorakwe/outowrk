import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBar.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  return (
    <Navbar bg="transparent" expand="lg">
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
            <Link className='link' to ="/"> Home </Link>  
            <Link className='link' to ="/about"> About Us </Link>  
            <Link className='link' to ="/services"> Services </Link> 
            <Link className='link' to ="/contact-us"> Contact Us </Link> 
            <Link className='link' to ="/Faq"> FAQ </Link>  
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;