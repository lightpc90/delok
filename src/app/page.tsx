import ChatButton from "@/components/chat/ChatButton";
import Faq from "@/components/faq/Faq";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Products from "@/components/products/Products";
import ServiceCards from "@/components/servicesCards/ServiceCards";
import styles from "../app/glow/glow.module.css"


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-white relative w-[100vw] overflow-hidden">
      <div className={`${styles.glow} absolute top-[-6%] left-[-20%] h-[700px] w-[700px]
      transform rotate-45 bg-gradient-to-r from-primary to-secondary
      `}></div>
      <div className={`${styles.blurryCircle1} w-[400px] h-[400px] absolute top-0 left-0`}></div>
      <div className={`${styles.blurryCircle2} w-[400px] h-[400px] absolute top-[700px] left-[-100px]`}></div>
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Header />
        <section className="flex flex-col w-full gap-8 row-start-3 items-center">
        <ServiceCards />
          <Products />
          <div className="w-full flex flex-col items-center relative">
            <div className={`${styles.glow} w-[400px] h-[400px] absolute top-0 left-0`}></div>
            <div className={`${styles.blurryCircle1} w-[400px] h-[400px] absolute top-[100px] left-[-100px]`}></div>
            <div className={`${styles.blurryCircle2} w-[400px] h-[400px] absolute top-[100px] left-[-100px]`}></div>

        <Faq />
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-8 row-start-3 items-center sm:items-start">
      </footer>
      <ChatButton />
    </div>
  );
}
