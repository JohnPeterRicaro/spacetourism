import { useStateContext } from "@/ContextProvider/ContextProvider";
import { barlow_condensed, bellefair } from "./_app";
import CrewCard from "./components/CrewCard";
import MobileMenu from "./components/mobileMenu";
import CrewData from "./data/CrewData";

const Crew = () => {
  const {isArrKey} = useStateContext()

  const selectedData = CrewData.find((crew) => crew.key === isArrKey)

  return (
    <>
      <div className="relative h-[710px] bg-no-repeat bg-cover bg-crew-mobile md:h-[1024px] md:bg-crew-tablet lg:h-screen lg:bg-crew-desktop overflow-hidden">
        <>
          <MobileMenu />
          <div className=" text-white text-center pt-[100px] px-[24px] flex flex-col justify-center items-center space-y-[32px] md:pt-[120px] md:px-[40px] md:text-[20px] md:justify-start md:items-center md:space-y-[40px] lg:pt-[210px] lg:text-[28px] lg:text-left lg:px-[165px] lg:space-y-[64px]">
            <div
              className={`${barlow_condensed.variable} font-barlowCondensed flex justify-center items-center gap-[18px] md:justify-start md:items-start md:w-full`}
            >
              <span className="opacity-[25%]">02</span>
              <h1 className="tracking-[2.7px]">MEET YOUR CREW</h1>
            </div>
            <CrewCard data={selectedData}/>
          </div>
        </>
      </div>
    </>
  );
};

export default Crew;
