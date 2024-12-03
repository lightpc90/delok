import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Products from "@/components/productLayout/Products";
import ServiceCards from "@/components/servicesCards/ServiceCards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-white ">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
       <Navbar/>
       <Header/>
       <ServiceCards/>
       <Products/>
      </main>
      <footer className="flex flex-col gap-8 row-start-3 items-center sm:items-start">
      </footer>
    </div>
  );
}
