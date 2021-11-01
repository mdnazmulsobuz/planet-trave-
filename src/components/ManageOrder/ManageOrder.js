import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    },[]);

    const handleDelete = id => {
        const url = `http://localhost:5000/orders/${id}`;
        const confirmation = window.confirm("Are you sure to detlete orders!!");
        if(confirmation){
        fetch(url, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data => {
            if(data.deletedCount){
                alert('Are You Sure Want to Delete!!')
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
            }
        })
    }
    };

    return (
        <div className='container py-5 my-5'> 
            <h2 className='text-primary'>Order Summary</h2>
            <h4 className='text-success'>Total Order:{orders.length}</h4>
            <Table responsive>
                <thead>
                    <tr>
                        <th scope="col">Order Id</th>
                        <th scope="col">Package Name</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th scope="col">Approve</th>
                        <th scope="col">Cancle</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order)=>(
                            <tr key ={order._id}>
                                <td> {order._id}</td>
                                <td className='text-success fs-5'>{order.name}</td>
                                <td>{order.user}</td>
                                <td>{order.email}</td>
                                <td className='text-danger'>Pending</td>
                                <td>
                                    <button className='btn btn-success'>Approve</button>
                                </td>
                                <td>
                                    <button onClick={ ()=> handleDelete(order._id)} className=' btn btn-danger'>Remove</button>
                                </td>
                                <td>${order.price}.00</td>
                            </tr>  
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrder;