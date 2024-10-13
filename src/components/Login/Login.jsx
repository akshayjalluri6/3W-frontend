import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const onSubmitSuccess = (data) => {
        Cookies.set('jwt_token', data.token, {
            expires: 30
        });
        navigate('/admin');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = formData;

        try {
            const response = await axios.post("https://threew-backend-4pc3.onrender.com/admin-login", {
                username,
                password
            });

            if (response.status === 200) {
                onSubmitSuccess(response.data);
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const token = Cookies.get('jwt_token');
        if (token) navigate('/admin');
    }, [navigate]);

    return (
        <div className="bg-login-container">
            <div className="login-form-container">
                <h1 className="wavehand">👋</h1>
                <h2 className="login-heading">Admin Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            required
                            onChange={e => setFormData({ ...formData, username: e.target.value })}
                        />
                        <label>
                            <span>Username</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            required
                            onChange={e => setFormData({ ...formData, password: e.target.value })}
                        />
                        <label>
                            <span>Password</span>
                        </label>
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
