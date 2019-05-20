import React, { useEffect, useState } from 'react';
import Odometer from "react-odometerjs";
import './styles.css';
import './digital.css';
// import "odometer/themes/odometer-theme-digital.css";


const Counter = () => {

  const [salary, setSalary] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [counterDispStatus, setCounterDispStatus] = useState(false);
  const [balance, setBalance] = useState(0);

  // useEffect(() => {
  // }, []);

  const postTaxSalary = (salary, taxRate) => {
    return (salary - (salary * (taxRate / 100.00))).toFixed(6);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBalance(postTaxSalary(salary, taxRate));
    setCounterDispStatus(true);
  };

  if (counterDispStatus) {
    return (
      // <Odometer value={balance} duration={500} format="(,ddd).dddd" />
      <Odometer format="(,ddd).dddddd" duration={500} value={balance} />
    )
  } else {
    return (
      <div className='counter'>
        <form onSubmit={handleSubmit}>
          <input type="number" placeholder="salary" min="0" step="1000" onChange={e => setSalary(e.currentTarget.valueAsNumber)} />
          <input type="number" placeholder="tax %" min="0" max="100" onChange={e => setTaxRate(e.currentTarget.valueAsNumber)} />
          <input type="submit" value="GO" />
        </form>
      </div>
    )
  }


};

export default Counter;