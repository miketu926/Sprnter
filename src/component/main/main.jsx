import React from 'react';
import './style.css';

import Counter from '../counter/counter.jsx';


const Main = () => {

  return (
    <div className='main'>
      <div className='main-header'>main title</div>

      <Counter />

      {/* salary input */}
      {/* tax input */}
    </div>
  )

};

export default Main;