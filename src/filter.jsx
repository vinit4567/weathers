import { useState } from "react";

const Filter = () =>{
const [query,setQuery] = useState('')
const data = ["apple","banana","cherry","mango","orange"]

const filterdata  = data.filter((dat) => 
    dat.toLowerCase().includes(query.toLowerCase())
)

return(
<div>
    <input 
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="search here"
    />

  <ul>
  {filterdata.map((item,idx) => (
        <li key={idx}>
            {item}
        </li>
    ))}
  </ul>
</div>
)
}
export default Filter;