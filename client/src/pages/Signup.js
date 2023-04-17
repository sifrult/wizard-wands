import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Button } from '@mui/material';

function Signup(props) {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                username: formState.username,
                password: formState.password,
            },
        });
        const token = mutationResponse.data.addUser.token;
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
        <div className='signupContainer' style={{ fontFamily: 'aclonica' }}>
            <div className='reroute'>
                <div style={{textAlign: 'center'}}>Already have an account?</div>
                <div>
                    <Link underline='none' to="/login">
                        <Button variant='contained'
                            sx={{
                                paddingTop: '5px',
                                paddingBottom: '5px',
                                backgroundColor: 'white',
                                color: 'black',
                            }}>
                            Login here!</Button>
                    </Link>
                </div>
            </div>
            <div className='signUp'>
                <h2>Create a New Account</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className='usernameSignup'>
                        <label htmlFor='username'>Username:</label>
                        <input
                            placeholder='Username'
                            name='username'
                            type='username'
                            id='username'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='passwordSignup'>
                        <label htmlFor='pwd'>Password</label>
                        <input
                            placeholder='*********'
                            name='password'
                            type='password'
                            id='pwd'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='submitBtn'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
