import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate(); 

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        const passwordValue = e.target.value;
        if (passwordValue.length <= 8) {
            setPassword(passwordValue);
            setPasswordError('');
        } else {
            setPasswordError('Password cannot exceed 8 characters');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            navigate('/home'); // Using navigate to go to '/home'
        } else {
            if (!email) setEmailError('Email is required');
            if (!password) setPasswordError('Password is required');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        {emailError && <span className="error">{emailError}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        {passwordError && <span className="error">{passwordError}</span>}
                    </div>
                    <div className="button-container">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
