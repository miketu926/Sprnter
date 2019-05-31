import React, { useEffect, useState } from 'react';
import Counter from '../counter/counter.jsx';
import Cashflow from '../cashflow/cashflow';
import './styles.css';


function Main() {
  const [salary, setSalary] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [balance, setBalance] = useState(0);
  const [rate, setRate] = useState(0);
  const [displayCounter, setDisplayCounter] = useState(false);

  const daysIntoYear = (date) => {
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TIMING VARS
    let currentDate = new Date();
    let currentDays = daysIntoYear(currentDate) - 1;
    let currentHrs = currentDate.getHours();
    let currentMins = currentDate.getMinutes();
    let currentSecs = currentDate.getSeconds();
    // END TIMING VARS

    // BALANCE VARS
    let EOYBalance = salary - (salary * (taxRate / 100));
    let daysOfYear = 365; // should also account for leap years w/ 366 days every ~4yrs
    let ratePerDay = EOYBalance / daysOfYear;
    let ratePerHr = EOYBalance / daysOfYear / 24;
    let ratePerMin = EOYBalance / daysOfYear / 24 / 60;
    let ratePerSec = EOYBalance / daysOfYear / 24 / 60 / 60;

    let currentBalance = currentDays * ratePerDay +
      currentHrs * ratePerHr +
      currentMins * ratePerMin +
      currentSecs * ratePerSec;
    // END BALANCE VARS

    setBalance(currentBalance + ratePerSec); // add 1s of value into bal. due to render delay
    setRate(ratePerSec); // for rate per second

    console.log("Curr. balance: " + currentBalance);
    console.log("Curr. rate/day: " + ratePerDay);
    console.log("Curr. rate/hr: " + ratePerHr);
    console.log("Curr. rate/min: " + ratePerMin);
    console.log("Curr. rate/sec: " + ratePerSec);

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
            rate={rate}
          />
        </div>
        <div className='main'>
          <div className='counter'>
            <Cashflow
              balance={balance}
              setBalance={setBalance}
            />
          </div>
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