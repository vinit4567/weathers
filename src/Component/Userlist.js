// src/UserList.js
import React, { useState, useEffect } from "react";


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data when the component mounts
  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(data => {
        setUsers(data)
        setLoading(false)
     })
     .catch((err) => {
        setError(err);
        setLoading(false);
     })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
