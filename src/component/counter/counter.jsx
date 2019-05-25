import React, { useEffect, useState, useRef } from 'react';
import Odometer from "react-odometerjs";
import './styles.css';
import './digital.css';
// import "odometer/themes/odometer-theme-digital.css";


function Counter({ balance, setBalance, rate }) {
  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    });

    useEffect(() => {
      const tick = () => { savedCallback.current(); };
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, [delay]);
  };

  useInterval(() => {
    setBalance(balance + rate);
  }, 1000);

  return (
    <Odometer className='odometer' format="(,ddd).dddddd" value={balance} />
  );

};

export default Counter;