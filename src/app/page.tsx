import ChatButton from "@/components/chat/ChatButton";
import Faq from "@/components/faq/Faq";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Products from "@/components/products/Products";
import ServiceCards from "@/components/servicesCards/ServiceCards";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-white ">
      
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Navbar />
        <Header />
        <section className="flex flex-col w-full gap-8 row-start-3 items-center">
        <ServiceCards />
        <Products />
        <Faq />
        </section>
      </main>
      <footer className="flex flex-col gap-8 row-start-3 items-center sm:items-start">
      </footer>
      <ChatButton />
    </div>
  );
}
