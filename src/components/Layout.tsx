"use client";

import React from "react";
import Header from "@/components/upgrade/Header/Header";
// import Footer from "@/components/upgrade/Footer/Footer";
import { usePathname } from "next/navigation";

const ConditionalLayout = ({ children }: { children: React.ReactNode }) => {
	const noNavAndFooterRoutes = ["/admin", "/product/"];
	const pathname = usePathname();
	console.log("pathname: ", pathname);
	const isNavAndFooterRoute = !noNavAndFooterRoutes.includes(pathname);
	return (
		<div className="">
			{isNavAndFooterRoute && <Header />}
			{children}
			{/* {isNavAndFooterRoute && <Footer />} */}
		</div>
	);
};

export default ConditionalLayout;
