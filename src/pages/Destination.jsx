import MobileMenu from "../components/mobileMenu";
import { barlow_condensed, bellefair } from "@/pages/_app";
import destinationData from "../data/DestinationData";
import DestinationCard from "../components/DestinationCard";
import { useStateContext } from "@/ContextProvider/ContextProvider";


const Destination = ({selectedKey}) => {
  const { isArrKey } = useStateContext()

  const selectedDestination = destinationData.find((planet) => planet.key === isArrKey)

  return (
    <>
      <div className="relative h-[850px] bg-no-repeat bg-cover bg-destination-mobile md:h-[1024px] md:bg-destination-tablet lg:h-screen lg:bg-destination-desktop overflow-hidden">
        <>
          <MobileMenu />
          <div className=" text-white text-center pt-[100px] px-[24px] flex flex-col justify-center items-center space-y-[32px] md:pt-[140px] md:px-[40px] md:text-[20px] md:justify-start md:items-center md:space-y-[60px] lg:pt-[200px] lg:text-[28px] lg:text-left lg:px-[165px] lg:space-y-[64px]">
            <div
              className={`${barlow_condensed.variable} font-barlowCondensed flex justify-center items-center gap-[18px] md:justify-start md:items-start md:w-full`}
            >
              <span className="opacity-[25%]">01</span>
              <h1 className=" tracking-[2.7px] md:tracking-[3.38px]">
                PICK YOUR DESTINATION
              </h1>
            </div>
            {!selectedDestination ? 
            <p className=" text-4xl ">
              No planet was selected with the provided key.
            </p> : <DestinationCard data={selectedDestination}/> }
          </div>
        </>
      </div>
    </>
  );
};

export default Destination;
