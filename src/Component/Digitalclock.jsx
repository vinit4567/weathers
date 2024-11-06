import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => updateTime(), 1000);
    return () => clearInterval(timerID); // Cleanup the interval on unmount
  }, []);

  const updateTime = () => {
    setTime(new Date());
  };

  // Format time to include AM/PM with correct 12-hour format
  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours; // Corrects hour '0' to '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.clock}>{formatTime(time)}</h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
  },
  clock: {
    color: '#61dafb',
    fontSize: '48px',
    fontFamily: 'monospace',
  }
};

export default Clock;
