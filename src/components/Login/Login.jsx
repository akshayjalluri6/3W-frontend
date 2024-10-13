import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const onSubmitSuccess = (data) => {
        Cookies.set('jwt_token', data.token, {
            expires: 30
        })
        navigate('/admin')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {username, password} = formData

        try {
            const response = await axios.post("https://threew-backend-4pc3.onrender.com/admin-login", {
                username,
                password
            })

            if(response.status === 200){
                onSubmitSuccess(response.data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const token = Cookies.get('jwt_token')
        if (token) navigate('/admin')
    }, [navigate])

    return(
        <div>
            <h1>Admin Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                required
                                onChange={e => setFormData({...formData, username: e.target.value})}
                            />
                            <label>
                                <span style={{ transitionDelay: '0ms' }}>U</span>
                                <span style={{ transitionDelay: '50ms' }}>s</span>
                                <span style={{ transitionDelay: '100ms' }}>e</span>
                                <span style={{ transitionDelay: '150ms' }}>r</span>
                                <span style={{ transitionDelay: '200ms' }}>n</span>
                                <span style={{ transitionDelay: '250ms' }}>a</span>
                                <span style={{ transitionDelay: '300ms' }}>m</span>
                                <span style={{ transitionDelay: '350ms' }}>e</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                required
                                onChange={e => setFormData({...formData, password: e.target.value})}
                            />
                            <label>
                                <span style={{ transitionDelay: '0ms' }}>P</span>
                                <span style={{ transitionDelay: '50ms' }}>a</span>
                                <span style={{ transitionDelay: '100ms' }}>s</span>
                                <span style={{ transitionDelay: '150ms' }}>s</span>
                                <span style={{ transitionDelay: '200ms' }}>w</span>
                                <span style={{ transitionDelay: '250ms' }}>o</span>
                                <span style={{ transitionDelay: '300ms' }}>r</span>
                                <span style={{ transitionDelay: '350ms' }}>d</span>
                            </label>
                        </div>
                        <button type="submit" className="login-btn">Login</button>
                    </form>
        </div>
    )
}

export default Login