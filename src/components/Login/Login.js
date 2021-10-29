import React from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
        <div className='pt-5 my-5'>
            <h2 className=' my-5'>Please Login Here!</h2>
            <form onSubmit="">
                <Button className='btn-regular 3y-5 button'>Google SignIn</Button>
            </form>
        </div>
    );
};

export default Login;