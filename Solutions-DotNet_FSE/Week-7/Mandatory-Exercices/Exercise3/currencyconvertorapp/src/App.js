import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

function App() {
  const [count, setCount] = useState(5);

  // Event Handlers
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  function handleSayWelcome() {
    alert('welcome');
  }
  function handleClickOnMe() {
    alert('I was clicked');
  }
  
  return (
    <div className="container">
      <div>
        <span className="counter">{count}</span>
      </div>
      <button className="action-btn" onClick={handleIncrement}>Increment</button>
      <button className="action-btn" onClick={handleDecrement}>Decrement</button>
      <button className="action-btn" onClick={handleSayWelcome}>Say welcome</button>
      <button className="action-btn" onClick={handleClickOnMe}>Click on me</button>
      <h1 className="heading">Currency Convertor!!!</h1>
      <CurrencyConvertor />
    </div>
  );
}

export default App;