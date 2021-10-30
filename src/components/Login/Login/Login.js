import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Login.css';



const Login = () => {
    const {signInUsingGoogle} =  useAuth();
    return (
        <div className='pt-5 my-5'>
            <h2 className=' my-5'>Please Login Here!</h2>
            <form onSubmit="">
                <Button onClick={signInUsingGoogle} className='btn-regular 3y-5 signin-button'>Google SignIn</Button>
            </form>
        </div>
    );
};

export default Login;