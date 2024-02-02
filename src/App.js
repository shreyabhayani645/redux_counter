import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,increment_5, user_increment,user_decrement} from './app/reducer/Counterslice'
import {useState } from 'react';
import Count from './Count'

 function App() {
  const count = useSelector((state) => state.counter.value)
  const name = useSelector((state) => state.counter.name)
  const email = useSelector((state) => state.counter.email)

  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState('');

  const handleIncrement = () => {
    // Dispatch user_increment action with the entered value
    const userval = parseInt(userInput);
    if (!isNaN(userval)) {
      dispatch(user_increment(userval));
    }
  };
  const handleDecrement = () => {
    const userval = parseInt(userInput);
      if (!isNaN(userval)) {
        dispatch(user_decrement(userval));
    }
  };
  return (  
    <div>
      <div>
        <h1>COUNT:{count}</h1>
        <h1>NAME:{name}</h1>
        <h1>EMAIL:{email}</h1>
        <input type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)}/><br></br>
        <button aria-label="Increment value" onClick={handleIncrement}>
          Increment
        </button>
        <button aria-label="Decrement value" onClick={handleDecrement}>
          Decrement
        </button>
        <button aria-label="Decrement value" onClick={() => dispatch(increment_5())}>
          increment_5
        </button>
      </div>
      {/* ==========================<br></br> */}
      {/* <Count></Count> */}
    </div>
  )
}
export default App;