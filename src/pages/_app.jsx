import { ContextProvider } from "@/ContextProvider/ContextProvider";
import "@/styles/globals.css";
import { Bellefair, Barlow_Condensed } from "@next/font/google";
import NavBar from "../components/navBar";

export const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ['400'],
  variable: ['--font-bellefair'],
});

export const barlow_condensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['200','300','400', '500', '700', '800'],
  variable: ['--font-barlow_condensed']
})

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <main className={`reltive ${bellefair.variable} font-bellefair w-[390px] md:w-[768px] lg:w-[1440px] h-auto mx-auto overflow-hidden`}>
        <NavBar/>
        <Component {...pageProps} />
      </main>
    </ContextProvider>
  );
}
