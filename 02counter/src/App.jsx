import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  //Counter
  const [counter,setCounter]=useState(5)
  const addValue = () => {
    setCounter(counter+1);
  };
  const subtractValue = () => {
    if(counter<=0){
      alert("Counter value is already 0");
      return;
    }
    setCounter(counter-1);
  };


  return (
    <>
    <h1>Vite + React + Tailwind CSS</h1>
    <h2>Counter value:{counter}</h2>
    <br />
    <button onClick={addValue}>add value</button>
    <br />
    <button onClick={subtractValue}>subtract value</button>

    </>
  )
}

export default App
