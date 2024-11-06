import { useState } from "react";

const Users = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [result, setResult] = useState('');
    const [searchemail, setSearchemail] = useState('');
    const [searchphone, setSearchphone] = useState('');

    const adduser = () => {
        // Check if all fields are filled
        if (name && email && phone) {
          // Add new user to the users array
          const newUser = { name, email, phone };
          setData([...data, newUser]);  // Update users array with new user
          setName('');
          setEmail('');
          setPhone('');
          setResult('User added successfully!');
        } else {
          setResult('Please fill all fields before adding!');
        }
    };

    const handlesearch = () => {
        // Check if both email and phone fields are filled
        if (!searchemail || !searchphone) {
            setResult('Please fill all fields before searching!');
            return;
        }

        // Compare as strings to avoid type mismatch
        const dat = data.find(
            (dat) => dat.email === searchemail && dat.phone === searchphone
        );

        if (dat) {
            setResult(`User found: ${dat.name}`);
        } else {
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
                <button onClick={adduser}>Add User</button>
            </div>

            {/* User Search Form */}
            <div style={{ marginTop: '20px' }}>
                <h3>Search User</h3>
                <input
                    type="email"
                    value={searchemail}
                    onChange={(e) => setSearchemail(e.target.value)}
                    placeholder="Search email"
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="text"  // Use text to handle all types of phone numbers
                    value={searchphone}
                    onChange={(e) => setSearchphone(e.target.value)}
                    placeholder="Search phone"
                    style={{ marginRight: '10px' }}
                />
                <button onClick={handlesearch}>Search User</button>
            </div>

            {result && <p style={{ marginTop: '20px' }}>{result}</p>}
        </div>
    );
};

export default Users;
