import React from 'react';

interface HeaderProps {
  seconds: number;
}

const Header: React.FC<HeaderProps> = ({ seconds }) => {
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  const isWarning = seconds <= 30 && seconds > 0;

  return (
    <header
      className="pt-[8px] top-0 left-0 w-full z-50 flex flex-col items-center justify-center py-3 bg-[#1D5B43] rounded-t-[60px] max-[430px]:py-2 max-[430px]:rounded-t-[30px]"
    >
      <p className="text-white text-[24px] font-semibold text-sm mb-1 bg-transparent max-[430px]:text-[18px] max-[320px]:text-[14px]">
        Успейте открыть пробную неделю
      </p>
      <p
        className={`font-bold text-xl text-[40px] mt-[4px] bg-transparent max-[430px]:text-[32px] ${isWarning ? 'animate-pulse text-red-400' : ''} max-[320px]:text-[28px]`}
        style={!isWarning ? { color: '#f0c040' } : undefined}
      >
        + {mm} : {ss} +
      </p>
    </header>
  );
};

export default Header;
