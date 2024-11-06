import { useState } from "react";

const Table1 = () =>{

    const [data,setData] = useState([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
        { id: 4, name: 'Bob Brown' },
        { id: 5, name: 'Charlie White' },
    ])

    const [searchTerm,setSearchTerm] = useState('')

    const filterdata = data.filter((item) =>  item.name.toLowerCase().replace(/\s+/g, '').includes(searchTerm.toLowerCase().replace(/\s+/g, '')))

   
return(
<div>
    <h1>Search Table</h1>
    <input type="text"
    placeholder="enter name..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    />

    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>
        </thead>

        <tbody>
            {filterdata.map((item) => (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                </tr>
            ))}

            {filterdata.length === 0 && (
                <tr>
                    <td colSpan="2">No result found</td>
                </tr>
            )}
        </tbody>
    </table>
</div>
)
}
export default Table1;