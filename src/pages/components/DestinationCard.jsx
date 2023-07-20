import { useEffect, useState } from "react";
import { barlow_condensed, bellefair } from "../_app";
import { useStateContext } from "@/ContextProvider/ContextProvider";
import { DestinationTitle, destinationData } from "../data/DestinationData";

const DestinationCard = ({ data }) => {
  const { isArrKey, setIsArrKey } = useStateContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsArrKey((prevKey) => (prevKey + 1) % destinationData.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const active =
    "cursor-pointer text-white h-full border-b-2 border-white uppercase";
  const inActive =
    "cursor-pointer text-white h-full border-b-2 border-white border-opacity-0 uppercase hover:border-opacity-100 transition";

  return (
    <>
      {" "}
      <div
        key={data.key}
        className="flex flex-col justify-center items-center space-y-[26px] md:space-y-[60px] lg:space-y-0 lg:space-x-[157px] lg:mt-[64px] lg:flex-row"
      >
        <div className="">
          <div
            className={`w-[170px] h-[170px] ${data.picture.png} bg-no-repeat bg-cover md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]`}
          ></div>
        </div>
        <div
          className={`${barlow_condensed.variable} font-barlowCondensed flex flex-col justify-center items-center lg:justify-start lg:items-start`}
        >
          <ul className="w-[70%] h-[34px] tracking-[2.7px] text-space-mid-light flex justify-between items-center md:w-[285.5px] md:text-[15px] lg:text-[16px]">
            {DestinationTitle.map((title) => (
              <>
                <li
                  key={title.key}
                  className={title.key === isArrKey ? active : inActive}
                  onClick={() => setIsArrKey(title.key)}
                >
                  {title.title}
                </li>
              </>
            ))}
          </ul>
          <h1
            className={`${bellefair.variable} font-bellefair text-[56px] md:text-[80px] lg:text-[100px] uppercase`}
          >
            {data.title}
          </h1>
          <p className="text-space-mid-light text-[15px] leading-[25px] tracking-[2.35px] md:text-[16px] md:w-[573px] lg:w-[444px]">
            {data.parg}
          </p>
          <div className="my-[32px] w-full h-[2px] rounded-lg bg-[#383B4B]"></div>
          <div className="flex flex-col justify-center items-center space-y-[32px] md:flex-row md:space-y-[0px] md:gap-24">
            <div>
              <h3 className=" text-space-mid-light text-[14px] tracking-[2.36px]">
                AVG. DISTANCE
              </h3>
              <h1
                className={`${bellefair.variable} font-bellefair text-[28px] uppercase`}
              >
                {data.dist}
              </h1>
            </div>
            <div>
              <h3 className=" text-space-mid-light text-[14px] tracking-[2.36px]">
                EST. TRAVEL TIME
              </h3>
              <h1
                className={`${bellefair.variable} font-bellefair text-[28px] uppercase`}
              >
                {data.time}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationCard;
