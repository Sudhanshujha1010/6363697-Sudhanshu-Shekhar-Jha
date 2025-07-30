import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // For "Euro" only, as per your screenshot
    if (currency.trim().toLowerCase() === 'euro') {
      // Example conversion: 1 Euro = 80 INR
      const val = parseFloat(amount) || 0;
      alert(`Converting to Euro Amount is ${val * 100.60}`);
    } else {
      alert('Please enter Euro as currency');
    }
  }

  return (
    <form className="convertor-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Amount:</label>
        <input
          type="text"
          className="input-field"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label>Currency:</label>
        <input
          type="text"
          className="input-field"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
      </div>
      <button className="submit-btn" type="submit">Submit</button>
    </form>
  );
}

export default CurrencyConvertor;