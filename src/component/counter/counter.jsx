import React, { useEffect, useState } from 'react';
import './style.css';


const Counter = () => {

  const [salary, setSalary] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [counterDispStatus, setCounterDispStatus] = useState(false);

  // useEffect(() => {
  // }, []);

  const postTaxSalary = (salary, taxRate) => {
    return (salary - (salary * (taxRate / 100)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounterDispStatus(true);
  };

  if (counterDispStatus) {
    return (
      <div className='counter'>
        COUNTER starting @ {postTaxSalary(salary, taxRate)}
      </div>
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