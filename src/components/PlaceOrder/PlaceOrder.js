import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result);
        })
    };
    const {packageId} = useParams();
    const [pack, setPack] = useState({});
    
    useEffect(()=>{
        fetch(`http://localhost:5000/packages/${packageId}`)
        .then(res=>res.json())
        .then(data =>setPack(data));

    }, []);


    return (
        <div className='container py-5 my-5 package-form'>
            <Row>
                <Col>
                    <h5 className='mb-3'>Shipping/Billing Address</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className='text-danger'>This field is required</span>}
                        <input placeholder='Address' defaultValue="" {...register("address")} />
                        <input placeholder='City' defaultValue="" {...register("city")} />
                        <input placeholder='Phone Number'defaultValue="" {...register("phone")} />
                        <input className='btn btn-primary' type="submit" />
                    </form>
                </Col>
                <Col>
                    <div className="col-md-10">
                        <Card>
                            <Card.Img variant="top" src={pack.img} />
                            <Card.Body>
                            <Card.Title className='text-success'>{pack.title}</Card.Title>
                            <Card.Title>Prie: ${pack.price}/per-person</Card.Title>
                            <Card.Text>Duration: ({pack.duration})</Card.Text>
                            <Card.Text>{pack.description}</Card.Text>
                            </Card.Body>
                        </Card> 
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default PlaceOrder;