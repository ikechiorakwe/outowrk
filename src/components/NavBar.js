import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Home from './OutworkHome';
import About from './OutworkAbout';
import Services from './OutworkServices';
import Faq from './OutworkFaq';
import Contact from './OutworkContact';
import { useRef } from 'react';
import './NavBar.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  const home = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const faq = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar className='navBar'  expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">
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
            <Nav>
              <Link onClick={() => scrollToSection(home)} className='link' to ="/"> Home </Link>  
              <Link onClick={() => scrollToSection(about)} className='link' to ="/about"> About Us </Link>  
              <Link onClick={() => scrollToSection(services)} className='link' to ="/services"> Services </Link>               
              <Link onClick={() => scrollToSection(faq)} className='link' to ="/Faq"> FAQ </Link>  
              <Link onClick={() => scrollToSection(contact)} className='link' to ="/contact-us"> Contact Us </Link>               
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div ref={home}>
        <Home />
      </div>
      <div ref={about}>
        <About />
      </div>
      <div ref={services}>
        <Services />
      </div>
      <div ref={faq}>
        <Faq />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
    </>
    
  );
}

export default NavBar;