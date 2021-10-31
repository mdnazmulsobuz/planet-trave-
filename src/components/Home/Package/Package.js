import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = ({packages}) => {
    const {title, img, duration, description, price, _id} = packages;
    return (
        <div className='col-lg-4 col-md-4 co-sm-6 col-12 my-3'>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title className='text-success'>{title}</Card.Title>
                    <Card.Title className='text-primary'>
                        ${price}/per-person
                    </Card.Title>
                    <Card.Title className='fs-6'>
                        {duration}
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={`/placeorder/${_id}`}><button className='btn btn-primary px-4 my-2'>Book Tour</button></Link>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Package;