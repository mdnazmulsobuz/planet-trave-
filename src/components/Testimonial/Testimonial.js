import React from 'react';
import './Testimonial.css';
import { Card, Col, Row } from 'react-bootstrap';
import holder1 from '../../images/holder1.jpeg'
import holder2 from '../../images/holder2.png'
import holder3 from '../../images/holder3.jpeg'
import holder4 from '../../images/holder4.jpeg'


const Testimonial = () => {
    return (
        <div className='testimonial-container'>
            <div className='container py-5 '>
            <h2>What Oue Traveller Say <br />About Us</h2>
                <Row> 
                    <Col className='col-md-3 co-sm-6 col-12 my-3'>
                    <Card>
                        <Card.Img variant="top" src={holder1} />
                        <Card.Body>
                        <Card.Title>Luna Hunter</Card.Title>
                        <Card.Text>
                            I am very much plessed  with planet tarvel. They provide us best level service. I will recommend my friends & family.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className='col-md-3 co-sm-6 col-12 my-3'>
                    <Card>
                        <Card.Img variant="top" src={holder2} />
                        <Card.Body>
                        <Card.Title>Henry Moouria</Card.Title>
                        <Card.Text>
                            WoW. I can't beleive their service. A one level. Very mich friendly and collaborate with our need. We will meet again. Thanks plaent travel.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className='col-md-3 co-sm-6 col-12 my-3'>
                    <Card>
                        <Card.Img variant="top" src={holder3} />
                        <Card.Body>
                        <Card.Title>Dina James</Card.Title>
                        <Card.Text>
                            Always number-1, I am all time choose planet travel packages. Most affordable package. You must try with planet travel. Hopefully enjoy.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className='col-md-3 co-sm-6 col-12 my-3'>
                    <Card>
                        <Card.Img variant="top" src={holder4} />
                        <Card.Body>
                        <Card.Title>Maria Anderson</Card.Title>
                        <Card.Text>
                             Thanks to planet tavel to arrange a ncie week. I am my friends & family enjoy planet travel package. They suggest us and help to enjoy more.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
        </div>
    );
};

export default Testimonial;