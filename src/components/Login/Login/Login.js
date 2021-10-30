import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';



const Login = () => {
    const {signInUsingGoogle} =  useAuth();
    const location = useLocation();
    const histroy = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            histroy.push(redirect_uri);
        })
    }

    return (
        <div className='pt-5 my-5'>
            <h2 className=' my-5'>Please Login Here!</h2>
            <form>
                <Button onClick={handleGogleLogin} className='btn-regular 3y-5 signin-button'>Google SignIn</Button>
            </form>
        </div>
    );
};

export default Login;