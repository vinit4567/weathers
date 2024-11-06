import { useState } from "react";

function Randomcolor (){
const [color,setColor] = useState("#ffffff")

const getrandomcolor = () =>{
    const randomcolor = '#' + Math.floor(Math.random() * 13567557).toString(16)
    return randomcolor;
}

const colorschange = () =>{
    const newcolor = getrandomcolor()
    setColor(newcolor)
}


    
return(
 <div style={{height : "100vh" , backgroundColor : color}}>
<h1 style={{color : "black"}}>Color changer</h1>
<button onClick={colorschange} style={{padding : "10px" , backgroundColor : "orange" , border : "none"}}>Change color</button>
 </div>
)
}
export default Randomcolor;