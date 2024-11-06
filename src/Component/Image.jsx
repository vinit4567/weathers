import { useEffect, useState } from "react";

const Image = () =>{
    const [images,setImages] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')

    useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    .then((response) => response.json())
    .then((data) =>{
        setImages(data)
        setLoading(false)
    })
    .catch(() => {
        setError('Failed to load images.')
        setLoading(false)
    })
    },[])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>
    return(
    <div style={{display : 'grid' , gridTemplateColumns : 'repeat(5 , 1fr)' , gap : '10px'}}>
     {images.map((image) => (
        <div key={image.id}>
        <img src={image.thumbnailUrl} alt={image.title}></img>
        </div>
     ))}
    </div>
    )
}
export default Image;