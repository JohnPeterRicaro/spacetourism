import { useStateContext } from "@/ContextProvider/ContextProvider";
import { barlow_condensed } from "../_app";
import { navLinks } from "../data/links";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const NavBar = () => {
  const {activeMenu, setActiveMenu } = useStateContext()
  
  const router = useRouter()

  const isActive = "relative h-full border-b-[3px] border-white flex justify-center items-center lg:text-[16px]"
  const isNotActive = "relative h-full border-b-[3px] border-white border-opacity-0 flex justify-center items-center hover:border-opacity-100 transition lg:text-[16px]"

  return (
    <>
      <div className="absolute z-10 px-[24px] py-[24px] flex justify-between items-center md:px-[0px] md:py-[0px] lg:pt-[40px] w-[390px] md:w-[768px] lg:w-[1440px]">
        <a href="/" className="md:pl-[40px] lg:pl-[55px]">
          <div className="w-[40px] h-[40px] bg-logo bg-cover bg-no-repeat"></div>
        </a>
        <div className="hidden z-10 w-[473px] h-[1px] bg-white opacity-25 translate-x-12 lg:block"></div>
        {/** Icon Button */}
        <button className=" flex justify-center items-center md:hidden" onClick={() => setActiveMenu(!activeMenu)}>
          <div className=" w-[24px] h-[24px] bg-icon-ham bg-no-repeat bg-cover"></div>
        </button>
        <div className="hidden w-[450px] h-[96px] bg-white bg-opacity-[4%] backdrop-blur md:block lg:w-[830px]">
          <ul className="w-full h-full flex justify-center items-center text-white lg:w-[542px] lg:translate-x-[80px]">
            {navLinks.map((link) => (
              <>
                <li
                  key={link.key}
                  className={`${barlow_condensed.variable} font-barlowCondensed w-full h-full flex justify-center items-center`}
                >
                  <div className={router.pathname === link.dest ? isActive : isNotActive}>
                    <a href={`${link.dest}`} className="flex justify-center items-center gap-[11px]">
                      <h3 className={`hidden font-bold lg:block`}>{link.num}</h3>
                      {`${link.title}`}
                    </a>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
