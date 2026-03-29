import React from "react";

interface CardProps {
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
  discount: number;
  discountActive: boolean;
  isActive: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  period,
  price,
  full_price,
  is_best,
  discount,
  text,
  discountActive,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        w-[240px] 
        h-[335px] 
        rounded-[40px] 
        border-2 
        ${isActive ? "border-[#E8A020]" : "border-[#484D4E]"} 
        bg-[#313637] 
        relative 
        cursor-pointer 
        box-border 
        px-[18px] 
        pt-[70px] 
        pb-[23px] 
        flex 
        flex-col 
        gap-4 
        max-[430px]:w-full 
        max-[430px]:h-auto 
        max-[430px]:rounded-[20px] 
        max-[430px]:flex-row 
        max-[430px]:items-center 
        max-[430px]:justify-between 
        max-[430px]:pt-[20px] 
        max-[430px]:pr-[22px] 
        max-[430px]:pb-[20px] 
        max-[430px]:pl-[30px]
      `}
    >
      <span
        className={`
          absolute
          top-0
          left-[50px]
          bg-[#fd5656]
          rounded-b-lg
          text-[22px]
          font-medium 
          text-white 
          px-2 
          py-[5px] 
          ${!discountActive ? "discount-badge-hide pointer-events-none" : ""} 
          max-[430px]:left-[260px]
          max-[430px]:py-[3px]
          max-[430px]:px-[6px]
          max-[430px]:text-[16px]
          max-[320px]:left-[205px]
        `}
      >
        -{discount}%
      </span>

      {is_best && (
        <span
          className="
          absolute
          top-[14px] 
          right-[24px] 
          text-[#FDB056] 
          text-base 
          font-medium 
          max-[430px]:top-[6px]
          max-[430px]:right-[14px]
        "
        >
          ХИТ!
        </span>
      )}

      <div className="flex flex-col">
        <span className="text-[26px] font-medium text-white text-center leading-[120%] max-[430px]:text-[18px] max-[430px]:text-left max-[320px]:text-[16px]">
          {period}
        </span>

        <div className="flex flex-col mt-[30px] max-[430px]:mt-2">
          {discountActive ? (
            <>
              <span className="text-[50px] font-semibold text-white text-center leading-[100%] max-[430px]:text-[34px] max-[430px]:text-left max-[320px]:text-[30px]">
                {price} ₽
              </span>
              <span className="text-[24px] font-regular text-[#919191] line-through text-right leading-[120%] max-[430px]:text-[16px] max-[320px]:text-[14px]">
                {full_price} ₽
              </span>
            </>
          ) : (
            <span className="text-[50px] font-semibold text-white text-center leading-[100%] full-price-show max-[430px]:text-[34px] max-[430px]:text-left max-[320px]:text-[26px]">
              {full_price} ₽
            </span>
          )}
        </div>
      </div>

      <p className="mt-[40px] text-[16px] font-regular text-white leading-[130%] max-[430px]:mt-0 max-[430px]:text-[14px] max-[430px]:max-w-[100px] max-[320px]:line-clamp-2">
        {text}
      </p>
    </div>
  );
};

export default Card;
