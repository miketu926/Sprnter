import React, { useEffect, useState } from 'react';
import Counter from '../counter/counter.jsx';
import './styles.css';


function Main() {
  const [salary, setSalary] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [balance, setBalance] = useState(0);
  const [displayCounter, setDisplayCounter] = useState(false);

  const handleSubmit = (e) => {
    // set up currentBalance using new Date determines today's balance since 1/1/YYYY
    e.preventDefault();
    let today = new Date();

    let currentBalance = (salary - (salary * (taxRate / 100.00))).toFixed(6);

    setBalance(currentBalance);
    setDisplayCounter(true);
  };

  if (displayCounter) {
    return (
      <div className='main'>
        <div className='main-header'>main title</div>
        <div className='counter'>
          <Counter
            balance={balance}
            setBalance={setBalance}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className='main'>
        <div className='main-header'>main title</div>

        <div className='counter'>
          <form onSubmit={handleSubmit}>
            <input type="number" placeholder="salary" min="0" step="1" onChange={e => setSalary(e.target.valueAsNumber)} />
            <input type="number" placeholder="tax %" min='0' max='100' onChange={e => setTaxRate(e.target.valueAsNumber)} />
            <input type="submit" value="GO" />
          </form>
        </div>
      </div>
    );
  }


};

export default Main;