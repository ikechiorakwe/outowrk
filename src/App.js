import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Link, Router, Routes } from 'react-router-dom'; 
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Faq from './components/pages/Faq';
import Contact from './components/pages/Contact';

function App() {
  return (
   
    <>
      <NavBar /> 
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/services"  element={<Services />} />                    
          <Route path="/Faq"  element={<Faq />} />
          <Route path="/contact-us"  element={<Contact />} />
        </Routes>
         
     
    </>
   
  );
}

export default App;
