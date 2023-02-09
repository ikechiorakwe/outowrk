import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './OutworkHome.css';

function OutworkHome() {
  return (
    <>
        <Container className='home'  id='homeId'>
            <Row>
                <Col sm={12} lg={6} className='align-self-start' >
                    <h3>
                        Outsource your tasks to us
                    </h3>
                    <h1>
                        Virtual Assistants on <br /> Demand
                    </h1>
                    <p>
                    Our virtual assistants are here to take care of all the tasks you <br />
                    don’t have time for. We provide the perfect solution for every <br /> 
                    professional who needs to focus on the important aspects of <br />
                    their business.
                    </p>
                </Col>
                <Col sm={12} lg={6} className='align-self-start'>
                <img className='img'
                    src = {require('../assets/images/check-list.png')}                    
                />
                </Col>                
            </Row>
        </Container> 
    </>
  )
}

export default OutworkHome
