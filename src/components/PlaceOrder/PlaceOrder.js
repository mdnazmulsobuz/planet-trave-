import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const histroy = useHistory();
    const redirect_uri = '/orders';
    const {packageId} = useParams();
    const [pack, setPack] = useState({});
    const onSubmit = data => {
    const orderData ={
        name: pack.title,
        price: pack.price,
        user: data.name,
        email: data.email,
        city: data.city,
        phone: data.phone
        }
        axios.post('http://localhost:5000/orders', orderData)
        .then(res =>{
            if(res.data.insertedId){
                alert('Order Submitted. Sucessfully Added On My Order.');
                histroy.push(redirect_uri);
            }
        })
    };
  
    useEffect(()=>{
        fetch(`https://hidden-scrubland-53724.herokuapp.com/packages/${packageId}`)
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
