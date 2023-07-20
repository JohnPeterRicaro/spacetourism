import { useStateContext } from "@/ContextProvider/ContextProvider";
import { barlow_condensed, bellefair } from "../pages/_app";
import CrewData , { linkedList } from "../data/CrewData";
import { useEffect } from "react";

const CrewCard = ({ data }) => {
  const { isArrKey, setIsArrKey } = useStateContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsArrKey((prevKey) => (prevKey + 1) % CrewData.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const active = "w-[10px] h-[10px] rounded-full bg-white cursor-pointer"
  const inactive = "w-[10px] h-[10px] rounded-full bg-white opacity-[17%] cursor-pointer hover:opacity-100 transition"

  return (
    <>
      <div
        key={data.key}
        className="flex flex-col justify-center items-center space-y-[32px] md:flex-col-reverse lg:flex-row-reverse lg:space-y-0"
      >
        <div className="w-full h-[223px] border-b-2 border-[#383B4B]  flex justify-center items-center md:h-[532px] md:border-0 lg:w-[600px] lg:h-[720px]">
          <div
            className={`w-full h-[223px] ${data.picture.png} bg-contain bg-center bg-no-repeat md:h-full lg:-translate-y-[100px] lg:translate-x-28`}
          ></div>
        </div>
        <div
          className={`${barlow_condensed.variable} font-barlowCondensed flex flex-col-reverse justify-center items-center md:flex-col lg:justify-start lg:items-start`}
        >
          <div className="flex flex-col-reverse justify-center items-center h-[200px] md:w-[592px] md:h-[200px] md:mb-[40px] lg:h-[300px] lg:justify-start lg:items-start lg:mb-[120px] lg:-mt-[200px]">
            <p className="mt-[16px] tracking-[2.35px] leading-[25px] text-space-mid-light md:text-[16px] lg:text-[18px] lg:w-[444px]">
              {data.parg}
            </p>
            <div>
              <h2
                className={`${bellefair.variable} font-bellefair uppercase text-[16px] opacity-[50%] md:text-[24px] lg:text-[32px]`}
              >
                {data.title}
              </h2>
              <h1
                className={`${bellefair.variable} font-bellefair uppercase text-[24px] md:text-[40px] lg:text-[56px] lg:w-[615px]`}
              >
                {data.name}
              </h1>
            </div>
          </div>
          <ul className="w-[130px] mb-[32px] flex justify-between items-center md:w-[120px] md:mb-[40px]">
            {linkedList.map((link) => (
              <>
                <li
                  key={link.key}
                  className={isArrKey === link.key ? active : inactive}
                  onClick={() => setIsArrKey(link.key)}
                ></li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CrewCard