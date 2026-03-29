import React, { useEffect, useState } from "react";
import ForeverCard from "../../components/ForeverCard";
import Card from "../../components/Card";
import axios from "axios";
import Loading from "../../components/Loading";

interface Tariff {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
}

interface TariffsPageProps {
  discountActive: boolean;
}

const TariffsPage: React.FC<TariffsPageProps> = ({ discountActive }) => {
  const [selected, setSelected] = useState<string>("");
  const [checked, setChecked] = useState(true);
  const [checkError, setCheckError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tariffsList, setTariffsList] = useState<Tariff[]>([]);

  const handleBuy = () => {
    if (!checked) {
      setCheckError(true);
      return;
    }
    setCheckError(false);
    alert("Покупка оформлена!");
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (e.target.checked) setCheckError(false);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://t-core.fit-hub.pro/Test/GetTariffs")
      .then((response) => {
        setTariffsList(response.data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="text-white max-w-[1216px] my-0 mx-auto bg-[#1C1E1C] min-h-screen max-[430px]:px-4">
      <div className="text-left mt-[50px] max-[430px]:mt-[20px]">
        <h1 className="text-[40px] font-bold font-semibold text-white max-[430px]:text-[24px] max-[430px]:max-w-[312px] max-[320px]:text-[22px]">
          Выбери подходящий для себя{" "}
          <span className="text-[#E8A020]">тариф</span>
        </h1>
      </div>

      <div className="mt-[110px] max-[430px]:mt-8">
        <div className="flex items-end max-[430px]:flex-col max-[430px]:items-center">
          <div className="relative flex items-end justify-center w-[380px] shrink-0 max-[430px]:w-[124px]">
            <img
              src="/person.png"
              alt="person"
              className="absolute bottom-[60px] left-0 w-full object-contain object-bottom max-[430px]:relative max-[430px]:bottom-0"
            />
            <div className="absolute bottom-[60px] w-[362px] h-[80px] bg-[linear-gradient(to_bottom,rgba(28,30,28,0)_0%,rgba(28,30,28,1)_100%)] max-[430px]:bottom-0 max-[430px]:w-[118px] max-[430px]:h-[26px]"></div>
          </div>

          <div className="w-[748px] shrink-0 flex flex-col gap-[14px] max-[430px]:w-full">
            {tariffsList
              .filter((item) => item.is_best)
              .map((item) => (
                <ForeverCard
                  key={item.id}
                  is_best={true}
                  period={item.period}
                  price={item.price}
                  full_price={item.full_price}
                  discount={Math.round(
                    (1 - item.price / item.full_price) * 100,
                  )}
                  text={item.text}
                  discountActive={discountActive}
                  isActive={selected === item.period}
                  onClick={() => setSelected(item.period)}
                />
              ))}

            <div className="grid grid-cols-[repeat(3,240px)] gap-[14px] max-[430px]:grid-cols-1">
              {tariffsList
                .filter((item) => !item.is_best)
                .map((item) => (
                  <Card
                    key={item.id}
                    period={item.period}
                    price={item.price}
                    full_price={item.full_price}
                    discount={Math.round(
                      (1 - item.price / item.full_price) * 100,
                    )}
                    text={item.text}
                    is_best={item.is_best}
                    discountActive={discountActive}
                    isActive={selected === item.period}
                    onClick={() => setSelected(item.period)}
                  />
                ))}
            </div>

            <div className="mt-[20px] w-[499px] bg-[#2D3233] border border-[#4A4D4E] rounded-[20px] p-[18px_20px] flex gap-2 items-start max-[430px]:w-full max-[430px]:p-[14px_12px] max-[430px]:mt-[12px]">
              <span style={{ flexShrink: 0 }}>
                <svg
                  width="24"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8775 16.6437C10.8869 17.2578 11.3885 17.75 12.0025 17.75C12.6166 17.75 13.1181 17.2531 13.1275 16.6437L13.5025 6.5375C13.526 6.15313 13.3853 5.77813 13.1135 5.4875C12.8228 5.17813 12.4197 5 12.0025 5C11.5853 5 11.1822 5.17813 10.8916 5.4875C10.6197 5.77813 10.4791 6.15313 10.5025 6.5375L10.8775 16.6437Z"
                    fill="#FDB056"
                  />
                  <path
                    d="M12 23C12.8284 23 13.5 22.3284 13.5 21.5C13.5 20.6716 12.8284 20 12 20C11.1716 20 10.5 20.6716 10.5 21.5C10.5 22.3284 11.1716 23 12 23Z"
                    fill="#FDB056"
                  />
                </svg>
              </span>
              <p className="max-w-[427px] text-base font-normal text-white leading-[130%] m-0 max-[430px]:text-[12px]">
                Среди планов на 3 месяца и более, люди получают в 2 раза лучший
                результат, чем за 1 месяц
              </p>
            </div>

            <label
              className={`custom-checkbox${checkError ? " checkbox-error" : ""} mt-[30px]  max-[430px]:mt-[24px]  max-[320px]:mt-[16px]`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckbox}
              />
              <span
                className={`text-base font-normal ${checkError ? "text-[#E53E3E]" : "text-[#CDCDCD]"} max-w-[605px] leading-[110%] max-[430px]:text-[12px]`}
              >
                Я согласен с{" "}
                <a href="#" style={{ textDecoration: "underline" }}>
                  офертой реализации сервиса
                </a>{" "}
                и{" "}
                <a href="#" style={{ textDecoration: "underline" }}>
                  Политикой конфиденциальности
                </a>
              </span>
            </label>

            <button
              onClick={handleBuy}
              className="btn-blink w-[352px] py-5 rounded-[20px] mt-4 bg-[#FDB056] text-[#191E1F] text-[20px] font-bold cursor-pointer max-[430px]:w-full max-[430px]:text-[18px] max-[430px]:mt-[20px] max-[320px]:mt-[16px]"
            >
              Купить
            </button>

            <p className="text-sm font-normal text-[#9B9B9B] leading-[120%] max-w-[748px] max-[430px]:max-w-full max-[430px]:text-[10px]">
              Нажимая кнопку «Купить», Пользователь соглашается на разовое
              списание денежных средств для получения пожизненного доступа к
              приложению. Пользователь соглашается, что данные
              кредитной/дебетовой карты будут сохранены для осуществления
              покупок дополнительных услуг сервиса в случае желания
              пользователя.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-[66px] max-[430px]:mt-[24px]">
        <div className="rounded-[30px] border border-[#484D4E] p-5 flex flex-col box-border max-[430px]:p-[12px]">
          <div className="inline-flex self-start border border-[#81FE95] rounded-[30px] px-[30px] py-4 text-[28px] font-medium text-[#81FE95] max-[430px]:px-[18px] max-[430px]:py-[10px] max-[430px]:text-[18px]  max-[320px]:text-[16px] max-[320px]:px-[14px]">
            гарантия возврата 30 дней
          </div>
          <p className="text-[24px] font-normal text-[#DCDCDC] leading-[130%] mt-[30px] max-[430px]:mt-[10px] max-[430px]:text-[14px] max-[320px]:px-[10px]">
            Мы уверены, что наш план сработает для тебя и ты увидишь видимые
            результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
            деньги в течение 30 дней с момента покупки, если ты не получишь
            видимых результатов.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TariffsPage;
