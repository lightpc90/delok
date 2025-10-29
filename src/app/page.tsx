import Hero from "@/components/upgrade/Hero/Hero";
import Contact from "@/components/upgrade/Contact/Contact";
import Purchase from "@/components/upgrade/Purchase/Purchase";
import Rental from "@/components/upgrade/Rental/Rental";
import Sales from "@/components/upgrade/Sales/Sales";
import Footer from "@/components/upgrade/Footer/Footer";

import React from "react";

const page = () => {
	return (
		<main className="min-h-dvh">
			<Hero />
			<Rental />
			<Purchase />
			<Sales />
			<Contact />
			<Footer />
		</main>
	);
};

export default page;
