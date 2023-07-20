import { useStateContext } from "@/ContextProvider/ContextProvider";
import { bellefair, barlow_condensed } from "../_app";
import { useEffect } from "react";
import technologyData, { techLinkedList } from "../data/TechnologyData";

const TechCard = ({data}) => {
  const {isArrKey, setIsArrKey} = useStateContext()

  useEffect(() => {
    const interval = setInterval(() => {
      setIsArrKey((prevKey) => (prevKey + 1) % technologyData.length);
    }, 40000);

    return () => clearInterval(interval);
  }, []);
  
    

  const active = "w-[40px] h-[40px] rounded-full border-[1px] border-white bg-white text-space-black flex justify-center items-center md:w-[60px] md:h-[60px] md:text-[24px] cursor-pointer"  
  const inactive = "w-[40px] h-[40px] rounded-full border-[1px] border-white border-opacity-25 flex justify-center items-center md:w-[60px] md:h-[60px] md:text-[24px] cursor-pointer hover:bg-white transition hover:text-space-black"

  return (
    <div key={data} className="space-y-[32px] md:space-y-[50px] lg:flex lg:justify-between lg:items-center lg:flex-row-reverse lg:space-y-0">
      <div className="w-full h-[170px] md:h-[310px] lg:w-[515px] lg:h-[530px] lg:translate-x-[148px] lg:-translate-y-[70px]">
        <div className={`w-full h-[170px] ${data.picture.landscape} bg-cover bg-no-repeat md:w-[768px] md:h-full ${data.picture.portrait} lg:w-[515px] lg:h-[530px]`}></div>
      </div>
      <div
        className={`${bellefair.variable} font-bellefair px-[24px] lg:flex lg:justify-center lg:items-start lg:gap-[80px]`}
      >
        <ul className="mb-[32px] flex justify-center items-center gap-[16px] md:mb-[40px] lg:flex-col lg:gap-[32px]">
          {techLinkedList.map(list => (
          <li className={isArrKey === list.key ? active : inactive} onClick={() => setIsArrKey(list.key)}>
            {list.title}
          </li>
          ))}
        </ul>
        <div className="flex flex-col-reverse justify-center items-center lg:justify-start lg:items-start lg:w-[470px]">
          <p className="text-[15px] text-space-mid-light leading-[25px] mt-[16px] md:w-[460px] md:text-[16px] lg:text-[18px] lg:w-[444px]">
            {data.parg}
          </p>
          <div>
            <h2
              className={`${bellefair.variable} font-bellefair text-[14px] tracking-[2.7px] text-space-mid-light md:text-[16px]`}
            >
              THE TERMINOLOGY…
            </h2>
            <h1
              className={`${bellefair.variable} font-bellefair text-[24px] md:text-[40px] lg:text-[56px]`}
            >
                {data.title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCard