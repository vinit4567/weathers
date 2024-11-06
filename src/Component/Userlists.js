import { useEffect, useState } from "react";

function Userlists (){
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
        setUsers(data)
        setLoading(false)
    })
    .catch((err)=>{
   setError(err)
   setLoading(false)
    })
    },[])

    if(loading)
    {
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error.message}</p>
    }
return(
   <div>
    <h1>User List</h1>
    <ul>
       {users.map((user) => (
        <li key={user.id}>
            {user.name} - {user.email} - {user.address.street}
        </li>
       ))}
    </ul>
   </div>
)
}
export default Userlists;