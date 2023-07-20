import { barlow_condensed, bellefair } from "./_app";
import MobileMenu from "../components/mobileMenu";

export default function Home() {
  return (
    <>
      <div className="relative h-[850px] bg-no-repeat bg-cover bg-home-mobile md:bg-home-tablet md:h-[1024px] lg:bg-home-desktop lg:h-screen overflow-hidden">
        <>
          <MobileMenu />
          <div className="pt-[100px] px-[24px] space-y-[81px] text-center text-white flex flex-col justify-center items-center md:w-[450px] md:mx-auto md:pt-[200px] md:px-[0px] md:space-y-[151px] lg:pt-[500px] lg:flex-row lg:space-y-0 lg:justify-between lg:items-center lg:w-full lg:px-[165px] lg:text-left">
            <div
              className={`${barlow_condensed.variable} font-barlowCondensed space-y-[16px] lg:w-[450px]`}
            >
              <h2 className=" text-space-mid-light text-[16px] md:text-[20px] md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.72px]">SO, YOU WANT TO TRAVEL TO</h2>
              <h1 className={`${bellefair.variable} font-bellefair text-[80px] md:text-[150px] md:leading-[150px] lg:text-[150px]`}>SPACE</h1>
              <p className=" text-space-mid-light text-[16px] md:leading-[28px] lg:text-[18px]">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <a href="/Destination" className="w-[150px] h-[150px] bg-white rounded-full flex justify-center items-center md:w-[242px] md:h-[242px]">
                <h1 className={`${bellefair.variable} font-bellefair text-space-black md:text-[32px]`}>
                  EXPLORE
                </h1>
            </a>
          </div>
        </>
      </div>
    </>
  );
}
