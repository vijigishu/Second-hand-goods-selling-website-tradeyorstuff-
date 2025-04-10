import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const AboutUsScreen = () => {
  return (
    <div className='aboutbody'>
      <Row md={3}>
        <Col md={3}></Col>
        <Col md={6} className='aboutpage'>
          <h1>Who are We?</h1>
          <p>
          
          </p>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={6} className='aboutpage1'>
          <h1>Developer</h1>
          <p>
           
          </p>
          <h3>Contact Details</h3>
          <i className='fas fa-phone'></i> 703*****02
          <br />
         
          <br />
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  )
}

export default AboutUsScreen
