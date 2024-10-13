import { useState, useEffect } from 'react'
import axios from 'axios'
import './Image.css'

const Image = ({ user }) => {
    const [imageData, setImageData] = useState(null)
    const user_id = user.id

    useEffect(() => {
        const getImages = async () => {
            try {
                const imagesUrl = `https://threew-backend-4pc3.onrender.com/get-image/${user_id}`
                const result = await axios.get(imagesUrl)
                setImageData(result.data)
            } catch (error) {
                console.error("Error while getting images: ", error)
            }
        }
        getImages()
    }, [user_id])

    return (
        <div className="image-container">
            {imageData && imageData.map((image) => (
                <div className="image-card" key={image.id}>
                    <img src={image.image_data} alt="user" className="user-image" />
                    <h2>{user.social_media_handle}</h2>
                    <p>Social Media Handle</p>
                </div>
            ))}
        </div>
    )
}

export default Image
