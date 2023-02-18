import React, { useState } from 'react';

function App() {
  const [acctName, setAcctName] = useState('');
  const [acctNumber, setAcctNumber] = useState('');
  const [balance, setBalance] = useState(100.12);

  const handleDeposit = (amount) => {
    setBalance(prevBalance => prevBalance + amount);
  }

  const handleWithdraw = (amount) => {
    if (amount > balance) {
      alert("You have an insufficient funds. Your available ccount balance is: " + balance);
    } else {
      setBalance(prevBalance => prevBalance - amount);
    }
  }

  return (
    <div>
      <h1>Personal Checking Account</h1>
      <form>
        <label>
          Account Name:
          <input type="text" value={acctName} onChange={e => setAcctName(e.target.value)} />
        </label>
        <label>
          Account Number:
          <input type="text" value={acctNumber} onChange={e => setAcctNumber(e.target.value)} />
        </label>
        <label>
          Available Balance: ${balance}
        </label>
      </form>
      <button onClick={() => handleDeposit(parseFloat(prompt("How much would you like to deposit?:")))}>Deposit</button>
      <button onClick={() => handleWithdraw(parseFloat(prompt("How much would you like to withdraw?:")))}>Withdraw</button>
    </div>
  );
}

export default App;
