import React from "react";

interface ForeverCardProps {
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

const ForeverCard: React.FC<ForeverCardProps> = ({
  period,
  price,
  full_price,
  discount,
  text,
  is_best,
  discountActive,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        h-[190px] 
        rounded-[34px] 
        border-2 
        ${isActive ? "border-[#FDB056]" : "border-[#484D4E]"} 
        bg-[#313637] 
        relative 
        cursor-pointer 
        box-border 
        pt-[34px] 
        pr-[80px] 
        pb-[30px] 
        pl-[122px] 
        flex 
        items-center 
        justify-between 
        gap-6 
        max-[430px]:h-auto 
        max-[430px]:rounded-[20px] 
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
          max-[430px]:left-[210px]
          max-[430px]:py-[3px]
          max-[430px]:px-[6px]
          max-[430px]:text-[16px]
          max-[320px]:left-[165px]
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
          хит!
        </span>
      )}

      <div className="flex flex-col">
        <span className="text-[26px] font-medium text-white text-center max-[430px]:text-[18px] max-[320px]:text-[16px]  max-[320px]:text-left">
          {period}
        </span>

        <div>
          {discountActive ? (
            <>
              <span className="text-[50px] font-semibold text-[#FDB056] leading-[100%] mt-[16px] block max-[430px]:text-[34px] max-[430px]:mt-2 max-[320px]:text-[30px]">
                {price} ₽
              </span>
              <span className="text-[24px] font-normal leading-[120%] text-[#919191] line-through text-right block max-[430px]:text-[16px] max-[320px]:text-[14px]">
                {full_price} ₽
              </span>
            </>
          ) : (
            <span className="text-[50px] font-semibold text-[#FDB056] leading-[100%] mt-[16px] block full-price-show max-[430px]:text-[34px] max-[430px]:mt-2 max-[320px]:text-[26px]">
              {full_price} ₽
            </span>
          )}
        </div>
      </div>

      <p className="text-base font-normal text-white max-w-[310px] leading-[130%] m-0 max-[430px]:text-[14px] max-[430px]:max-w-[120px] max-[430px]:line-clamp-3 max-[320px]:line-clamp-2 max-[320px]:max-w-[100px]">
        {text}
      </p>
    </div>
  );
};

export default ForeverCard;
