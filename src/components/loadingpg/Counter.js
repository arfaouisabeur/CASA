import React, { useState, useEffect } from 'react';
import "./Sechome.css";

function Counter() {
  const targetDate = new Date('2023-11-01');
  const [count, setCount] = useState(calculateCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(calculateCountdown());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateCountdown() {
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  return (
    <div className="counteri">
      <h2 className='countdowni-ite'>Countdown to  November 1, 2023</h2>
      <div className="countdowni">
        <div className="countdowni-item">
          <h1 className='countdowni-ite'>{count.days} DAYS :
          {count.hours} HOURS :
          {count.minutes} minutes :
        {count.seconds} seconds</h1>
        
        </div>
      </div>
    </div>
  );
}

export default Counter;
