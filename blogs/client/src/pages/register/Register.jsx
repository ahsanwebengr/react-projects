import { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const resp = await axios.post(`http://localhost:3000/api/auth/register`, {
                username, email, password
            });
            resp.data && navigate('/login');
        } catch (error) {
            setError(true);
        }

    };
    return (
        <div className="register">
            {error && <p className="errorMsg">Something went wrong</p>}
            <form className="registerForm" onSubmit={handleSubmit}>
                <span className="registerTitle">Register</span>
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Enter your username..." onChange={(e) => setUserName(e.target.value)} value={username} />
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} value={email} />
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)} value={password} />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    );
};

export default Register;