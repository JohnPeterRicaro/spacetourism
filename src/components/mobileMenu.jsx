import { useStateContext } from "@/ContextProvider/ContextProvider";
import navLinks from "../data/links";
import { barlow_condensed } from "../pages/_app";

const MobileMenu = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <>
      {activeMenu && (
        <div className="absolute z-20 text-white text-[16px] w-[254px] h-[100%] ml-[136px] px-[32px] py-[34px] bg-white bg-opacity-[4%] backdrop-blur flex flex-col justify-start items-end space-y-[64px] md:hidden">
          <button className=" h-[24px] w-[24px] bg-icon-close bg-no-repeat bg-cover" onClick={() => setActiveMenu(!activeMenu)}></button>
          <ul
            className={`w-full ${barlow_condensed.variable} font-barlowCondensed flex flex-col justify-start items-start space-y-[32px]`}
          >
            {navLinks.map((link) => (
              <a href={link.dest} className="w-full">
                <li className="w-full flex justify-start items-start gap-3" key={link.key}>
                  <h2 className="font-bold">{link.num}</h2>
                  <h2>{link.title}</h2>
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
