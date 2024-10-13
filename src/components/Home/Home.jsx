import { useState } from "react"
import axios from "axios"
import './Home.css'
const Home = () => {
    const [formData, setFormData] = useState({
        username: "",
        social_media_handle: "",
        image: null
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const url = "https://threew-backend-4pc3.onrender.com/post-images"
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="home-container">
            <h1 className="home-title">User Submission Form</h1>
            <form className="user-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" 
                id="username" placeholder="Username"
                value={formData.username} 
                required
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                />

                <label htmlFor="social_media_platform">Social Media Platform:</label>
                <input type="text" 
                id="social_media_platform" placeholder="Social Media Handle:"
                value={formData.social_media_handle} 
                required
                onChange={(e) => setFormData({...formData, social_media_handle: e.target.value})}
                />

                <label htmlFor="image">Upload Images: </label>
                <input type="file" 
                id="image" 
                required
                onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Home