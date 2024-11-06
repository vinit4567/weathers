import { useState } from "react";

const Todos = () =>{
const [task,setTask] = useState([])
const [input,setInput] = useState('')

const addtodo = () =>{
   if(input.trim())
   {
    const inputuniques = {id : Date.now() , text: input.trim()}
    setTask([...task,inputuniques])
    setInput('')
   }
}

const deletetask = (idx) =>{
    const newtask = task.filter((_,i) => i !== idx)
    setTask(newtask)
}

return(
    <div>
        <input
         type="text"
         value={input}
         onChange={(e) => setInput(e.target.value)}
         placeholder="Add a Todo list.."
         />

         <button onClick={addtodo} style={{padding: "13px"}}>Add Todo</button>

         <ul>
            {task.map((item,idx) =>(
                <li key={item.id}>
                 {item.text}
                 <button onClick={() => deletetask(idx)}>Delete</button>
                </li>
            ))}
         </ul>
    </div>
)
}
export default Todos;