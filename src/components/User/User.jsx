import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './User.css'
import Image from '../Image/Image'

const User = () => {
    const { username } = useParams()
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get(`https://threew-backend-4pc3.onrender.com/get-user/${username}`)
                setUserData(response.data)
            } catch (error) {
                console.log("Error fetching user data: ", error)
            }
        }

        getUserData()
    }, [username])

    return (
        <div className="user-container">
            <h1 className="username-heading">Profile: {username}</h1>
            <div className="image-gallery">
                {userData && userData.map((user) => (
                    <Image user={user} key={user.id} />
                ))}
            </div>
        </div>
    )
}

export default User
