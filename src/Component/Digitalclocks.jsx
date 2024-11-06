import { useEffect, useState } from "react";

const Digitalclocks = () =>{
    const [time,setTime] = useState(new Date())

    useEffect(()=>{
       const timerID =  setInterval(() => { updateTime() }, 1000);
       return () => clearInterval(timerID)
    })

    const updateTime = () =>{
        setTime(new Date())
    }

    const formatime = (date) =>{
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm =  hours >= 12 ? 'AM' : 'PM'

        hours = hours % 12
        hours = hours === 0 ? 12 : hours
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        return `${hours}:${minutes}:${seconds} ${ampm}`
        
    }
return(
    <div style={styles.container}>
        <div style={styles.clock}>{formatime(time)}</div>
    </div>
)
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#282c34',
    },

    clock : {
        color: '#61dafb',
        fontSize: '48px',
        fontFamily: 'monospace',
    }
}
export default Digitalclocks;