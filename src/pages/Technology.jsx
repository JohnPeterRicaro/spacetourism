import MobileMenu from "./components/mobileMenu";
import { bellefair, barlow_condensed } from "./_app";
import { useStateContext } from "@/ContextProvider/ContextProvider";
import technologyData from "./data/TechnologyData";
import TechCard from "./components/technologyCard";

const Technology = () => {
  const { isArrKey } = useStateContext();

  const selectedData = technologyData.find((tech) => tech.key === isArrKey);

  return (
    <>
      <div className="relative h-[710px] bg-no-repeat bg-cover bg-technology-mobile md:bg-technology-tablet md:h-[1024px] lg:bg-technology-desktop lg:h-screen overflow-hidden">
        <>
          <MobileMenu />
          <div className=" text-white text-center pt-[100px] flex flex-col justify-center items-center space-y-[32px] md:text-[20px] md:space-y-[60px] md:pt-[120px] lg:pt-[200px] lg:text-[28px] lg:text-left lg:px-[124px] lg:space-y-[76px]">
            <div
              className={`${barlow_condensed.variable} font-barlowCondensed flex justify-center items-center gap-[18px] md:w-full md:px-[40px] md:justify-start md:items-start`}
            >
              <span className="opacity-[25%]">03</span>
              <h1 className="tracking-[2.7px]">SPACE LAUNCH 101</h1>
            </div>
            {!selectedData ? (
              <p className=" text-4xl ">
                No Tech was selected with the provided key.
              </p>
            ) : (
              <TechCard data={selectedData} />
            )}
          </div>
        </>
      </div>
    </>
  );
};

export default Technology;
