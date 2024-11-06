import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(1); // Initial count 1 se start hoga
  const [isForward, setIsForward] = useState(true); // True: 1 to 10, False: 10 to 1
  const [isActive, setIsActive] = useState(false); // Counter chal raha hai ya nahi

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          if (isForward) {
            if (prevCount < 10) {
              return prevCount + 1; // Forward mode: 1 to 10
            } else {
              setIsActive(false); // 10 tak pahuncha toh stop kar do
              return prevCount;
            }
          } else {
            if (prevCount > 1) {
              return prevCount - 1; // Backward mode: 10 to 1
            } else {
              setIsActive(false); // 1 tak pahuncha toh stop kar do
              return prevCount;
            }
          }
        });
      }, 1000); // 1 second delay
    }
    return () => clearInterval(interval); // Cleanup on unmount or stop
  }, [isActive, isForward]);

  const handleStart = () => {
    setIsActive(true);
    setIsForward(count === 1); // Agar count 1 pe hai toh forward, nahi toh backward
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default Counter;
