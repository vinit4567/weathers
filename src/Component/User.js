import React, { useState } from 'react';

function App() {
  // State to store user details and inputs
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchPhone, setSearchPhone] = useState('');
  const [result, setResult] = useState('');

  // Function to add new user
  const handleAddUser = () => {
    // Check if all fields are filled
    if (name && email && phone) {
      // Add new user to the users array
      const newUser = { name, email, phone };
      setUsers([...users, newUser]);  // Update users array with new user
      setName('');
      setEmail('');
      setPhone('');
      setResult('User added successfully!');
    } else {
      setResult('Please fill all fields before adding!');
    }
  };

  // Function to search user by email and phone
  const handleSearch = () => {
    // Find user by email and phone number
    const user = users.find(
      (user) => user.email === searchEmail && user.phone === searchPhone
    );
    
    if (user) {
      setResult(`User Found: ${user.name}`);
    } 
    else if(searchEmail === ''){
    setResult("Please fill all fields before searching!")
    } 
    else if(searchPhone === ''){
        setResult("Please fill all fields before searching!")
} 
    else{
      setResult('No user found with this email and phone number');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Registration & Search</h2>
      
      {/* User Addition Form */}
      <div>
        <h3>Add User</h3>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      {/* Search User Form */}
      <div style={{ marginTop: '20px' }}>
        <h3>Search User</h3>
        <input
          type="email"
          placeholder="Enter email to search"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Enter phone number to search"
          value={searchPhone}
          onChange={(e) => setSearchPhone(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleSearch}>Search User</button>
      </div>

      {/* Search result or Add confirmation */}
      {result && <p style={{ marginTop: '20px' }}>{result}</p>}
    </div>
  );
}

export default App;
