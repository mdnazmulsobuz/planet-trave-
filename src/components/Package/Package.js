import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = (pack) => {
    const {id, title, img, description} = pack;
    return (
        <div className='col-lg-4 col-md-4 co-sm-6 col-12 my-3'>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title className='text-success'>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={`/details/${id}`}><button className='btn btn-primary px-4 my-2'>Details</button></Link>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Package;