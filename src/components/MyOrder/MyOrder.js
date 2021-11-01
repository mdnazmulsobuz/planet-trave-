import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);

    const email = "sobuz287@gmail.com"; 
    
    useEffect( () =>{
        fetch(`https://hidden-scrubland-53724.herokuapp.com/orders/${email}`)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[]);

    const handleDelete = id => {
        const confirmation = window.confirm("Are you sure to delete!!");
        const url = `https://hidden-scrubland-53724.herokuapp.com/orders/${id}`;
        if (confirmation){
        fetch(url, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data => {
            const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining);
        })
    }
    }
    return (
        <div className='container py-5 my-5'> 
            <h2 className='text-primary'>Order Summary</h2>
            <h4 className='text-success'>Total Order:{orders.length}</h4> 
            <Table responsive>
                <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Package Name</th>
                        <th scope="col">Status</th>
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
                                <td className='text-danger'>Pending</td>
                                <td>
                                    <button onClick={ ()=> handleDelete(order._id)} className=' btn btn-danger'>Delete</button>
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

export default MyOrder;