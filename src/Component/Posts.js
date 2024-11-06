import { useEffect, useState } from "react";

function Posts () {
const [postdata,setPostdata] = useState([])

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((res) => res.json())
.then((finaldata) => {
    setPostdata(finaldata)
})
},[])

return(
    <div>
        <h1>Posts</h1>
        <ul>
            {postdata.map((data) => (
                <li key={data.id}>{data.title}</li>
            ))}
        </ul>
    </div>
)
}
export default Posts;