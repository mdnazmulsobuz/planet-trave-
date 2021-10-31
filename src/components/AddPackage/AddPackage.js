import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPackages.css';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('http://localhost:5000/packages', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Sucessfully Added Package');
                reset();
            }
        })
    }
    return (
        <div className='package-form container my-5 pb-5'>
            <h2 className='mb-5 text-primary'>Add Package</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 20 })} placeholder='Package Title' />
                <input type="number" {...register("price")} placeholder='Price'/>
                <input {...register("duration")} placeholder='Package Duration' />
                <textarea rows='4' {...register("description")}  placeholder='Histrical Place Information'/>
                <input {...register("img")} placeholder='Image URL' />
                <input className='btn btn-primary' type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;