import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import './Admin.css'

const Admin = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get("https://threew-backend-4pc3.onrender.com/get-users")
                setUsers(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    }, [])

    return (
        <div className="admin-container">
            <h1 className="admin-title">Users</h1>
            <div className="user-list">
                {users.map((user, index) => (
                    <div key={index} className="user-card">
                        <Link to={`/user/${user.username}`}>{user.username}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Admin
