import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#1C1E1C] flex flex-col items-center justify-center z-50">
      <div className="relative flex items-center justify-center w-[120px] h-[120px]">
        {/* Outer ring */}
        <svg
          className="loading-ring-outer absolute inset-0"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
        >
          <circle
            cx="60"
            cy="60"
            r="54"
            stroke="#FDB056"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="80 260"
            opacity="0.9"
          />
        </svg>

        {/* Inner ring */}
        <svg
          className="loading-ring-inner absolute"
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
          style={{ top: 16, left: 16 }}
        >
          <circle
            cx="44"
            cy="44"
            r="38"
            stroke="#81FE95"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="50 190"
            opacity="0.7"
          />
        </svg>

        {/* Core dot */}
        <div className="loading-core w-[32px] h-[32px] rounded-full bg-[#FDB056] shadow-[0_0_20px_6px_rgba(253,176,86,0.4)]" />
      </div>

      <p className="loading-text mt-8 text-[18px] font-semibold text-white tracking-widest uppercase">
        Загрузка
      </p>

      <div className="flex gap-[6px] mt-3">
        <span className="loading-dot w-[6px] h-[6px] rounded-full bg-[#FDB056]" />
        <span className="loading-dot w-[6px] h-[6px] rounded-full bg-[#FDB056]" />
        <span className="loading-dot w-[6px] h-[6px] rounded-full bg-[#FDB056]" />
      </div>
    </div>
  );
};

export default Loading;
