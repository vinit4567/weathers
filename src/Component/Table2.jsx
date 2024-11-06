import { useState } from "react";

const Table2  = () =>{
    const [data,setData] = useState([
        {id : 1 , name : 'ramesh'},
        {id : 2 , name : 'kamlesh'},
        {id : 3 , name : 'suresh'},
        {id : 4 , name : 'rajesh'},
        {id : 5 , name : 'jamnesh'}
    ])

    const [searchTerm,setSearchTerm] = useState('')

    const filterdata = data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
return(
   <div>
    <h1>Find user</h1>
    <input 
    type="text"
    placeholder="enter user name..." 
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    />

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <td>Name</td>
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
export default Table2;