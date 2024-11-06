import React, { useEffect, useState } from "react";

function App() {
  const [post, setPost] = useState(null); // Sirf ek post ka data ke liye state
  
  
  useEffect(() => {
    // Sirf ek specific post fetch karte hain (id = 1)
   fetch('https://jsonplaceholder.typicode.com/posts/1')
   .then(res => res.json())
   .then(json => setPost(json))
   .catch(error => console.log(error))
     
  }, []);
  

  

  return (
    <div>
      <h1>Single Post</h1>
      {post ? (
       <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        </div>
      )
    :
    (
      <p>Loading...</p>
    )
    }
    </div>
  );
}

export default App;
