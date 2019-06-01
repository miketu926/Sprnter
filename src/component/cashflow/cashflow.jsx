import React, { useEffect, useState } from 'react';
import CashflowList from '../cashflow_list/cashflow_list';

function Cashflow({ balance, setBalance }) {

  const [deduction, setDeduction] = useState(0);
  const [addition, setAddition] = useState(0);
  const [deductionList, setDeductionList] = useState([]);
  const [additionList, setAdditionList] = useState([]);

  const handleDeduction = (e) => {
    e.preventDefault();
    let amount = (deduction.length === 0) ? 0 : parseInt(deduction);
    setBalance(balance - amount);
    setDeduction(amount);
    setDeductionList([...deductionList, amount]);
    setDeduction(0);
  };

  const handleAddition = (e) => {
    e.preventDefault();
    let amount = (addition.length === 0) ? 0 : parseInt(addition);
    setBalance(balance + amount);
    setAddition(amount);
    setAdditionList([...additionList, amount]);
    setAddition(0);
  };

  return (
    <>
      <form onSubmit={handleDeduction}>
        <input type="number" placeholder="deduction" min='0' value={deduction} onChange={e => setDeduction(e.target.value)} />
        <input type="submit" value="DEDUCT :(" />
      </form>
      <form onSubmit={handleAddition}>
        <input type="number" placeholder="addition" min='0' value={addition} onChange={e => setAddition(e.target.value)} />
        <input type="submit" value="ADD :)" />
      </form>
      <ul>
        <CashflowList
          deductionList={deductionList}
          additionList={additionList}
        />
      </ul>
    </>
  )

};

export default Cashflow;