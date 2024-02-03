import React from "react";
import React,{useState} from "react";

function Toggle() {
  const [isON, setIsON] = useState(false);

  function handleClick(){
    setIsON((isON) => !isON)
  }
  return <button style={{background: color}} onClick={handleClick}>{isON ? "ON" : "OFF" }</button>;
}

export default Toggle;
