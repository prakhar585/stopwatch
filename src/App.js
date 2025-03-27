import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("0:00");
  const [elapsedTime, setElapsedtime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setElapsedtime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);


  useEffect(()=>{
    const minutes = Math.floor(elapsedTime/60);
    const seconds = elapsedTime%60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2,"0")}`;
    setTime(formattedTime);
  },[elapsedTime])





  const handleStartandStop = () => {
    setIsRunning(!isRunning);

    //should call the time after every one second
    //how do I convert string into a time format
  };


  const handleReset =()=>{
    setElapsedtime(0);
    setTime("0:00");
  }

  return (
    <div className="App">
      <h3>Stopwatch</h3>
      <h4>Time : {time}</h4>
      <button onClick={handleStartandStop}>
        {isRunning ? <p>Stop</p> : <p>Start</p>}
      </button>
      <button>
        <p onClick={handleReset}>Reset</p>
      </button>
    </div>
  );
}

export default App;
