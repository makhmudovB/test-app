import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TariffsPage from './pages/TariffsPage';

const INITIAL_SECONDS = 2 * 60;

const App: React.FC = () => {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <>
      <Header seconds={seconds} />
      <div className="pt-20 pb-20 bg-[#1C1E1C] max-[430px]:pt-[20px] max-[430px]:pb-[20px] max-[320px]:pt-2 max-[320px]:pb-2">
        <TariffsPage discountActive={seconds > 0} />
      </div>
    </>
  );
};

export default App;
