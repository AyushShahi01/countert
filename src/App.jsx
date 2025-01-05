
import { useState } from 'react';
import './app.css'
function App() {
  let [message, useMessage]=useState('');
  let [counter, setCounter]= useState(0);
  let [value, setValue]=useState(1);
  const addValue=()=>{
    if(counter+value>=21){
      message="The counter cannot be increment";
      useMessage(message);
    }
    else{
      counter= counter+ value;
      setCounter(counter);
      console.log(counter);
      message="";
      useMessage(message);
    }
  }
  const removeValue=()=>{
    if(counter<value){
      message="The counter cannot be reduced";
      useMessage(message);
    }
    else{
      counter= counter-value;
      setCounter(counter);
      console.log(counter);
      message="";
      useMessage(message);
    }
  }

  function increaseValue(){
    value++;
    setValue(value);
  }

  function decreaseValue(){
    
    value--;
    setValue(value);
  }

  return (
    <>
      <h1>Sanam Bewafa he</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      
      <button onClick={removeValue}>Remove value</button>
      <br />
      <div className='value'>
        <button onClick={decreaseValue}>-</button>
        <p>Value = {value}</p>
        <button onClick={increaseValue}>+</button>
      </div>
      <div>
        <p>{message}</p>
      </div>
    </>
  )
}

export default App
