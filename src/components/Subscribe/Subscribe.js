import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';


const Subscribe = () => {
    return (
        <div className= 'py-5 container px-5'>
           <h2 className='pb-3'>Subscribe To Our Newsletter <br />For Latest Update</h2> 
            <Row>
                <Col>
                    <div className='col-md-4'></div>
                </Col>
                    <div className='col-md-4'>
                    <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" required/>
                    </FloatingLabel>
                    </div>
                <Col>
                    <div className='col-md-4'></div>
                </Col>
            </Row>
            <div className="d-flex justify-content-center "><button className="btn btn-primary  button font-color">Subscribe</button></div>
        </div>
    );
};

export default Subscribe;