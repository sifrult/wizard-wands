import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';

function Login(props) {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [loginUser] = useMutation(LOGIN_USER); 

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await loginUser({ 
            variables: {
                username: formState.username,
                password: formState.password,
            },
        });
        const token = mutationResponse.data.loginUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className='loginContainer'> 
            <Link to="/signup">Signup</Link> 
            
            <h2>Login</h2> 
            <form onSubmit={handleFormSubmit}>
                <div className='usernameLogin'> 
                    <label htmlFor='username'>Username:</label>
                    <input
                    placeholder='Username'
                    name='username'
                    type='text' 
                    id='username'
                    onChange={handleChange}
                    />
                </div>
                <div className='passwordLogin'> 
                    <label htmlFor='pwd'>Password</label>
                    <input
                    placeholder='*********'
                    name='password'
                    type='password'
                    id='password'
                    onChange={handleChange}
                    />
                </div>
                <div className='submitBtn'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
