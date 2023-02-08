import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function OutworkAbout() {
  return (
    <>
        <Container className='section' id='aboutId'>
            <Row>
                <Col sm={12} lg={6}>
                    <h3>
                        Outsource your to-do list
                    </h3>
                    <h1>
                        Virtual Assistants on <br /> About
                    </h1>
                    <p>
                    Our virtual assistants are here to take care of all the tasks you <br />
                    don’t have time for. We provide the perfect solution for every <br /> 
                     professional who needs to focus on the important aspects of <br />
                      their business.
                    </p>
                </Col>
                <Col sm={12} lg={6}>
                <img
                    src = {require('../assets/images/TODO.png')}                    
                    // height="120"
                    // className="d-inline-block align-top"
                    alt=""
                />
                </Col>                
            </Row>
            
        </Container> 
    </>
  )
}

export default OutworkAbout
