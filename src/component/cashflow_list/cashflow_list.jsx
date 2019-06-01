import React from 'react';

function CashflowList({ deductionList, additionList }) {

  const deductionListItems = deductionList.map(item => {
    return <li>-{item}</li>
  });

  const additionListItems = additionList.map(item => {
    return <li>+{item}</li>
  })

  return (
    <>
      <div>Deductions</div>
      {deductionListItems}
      <div>Additions</div>
      {additionListItems}
    </>
  )

};

export default CashflowList;