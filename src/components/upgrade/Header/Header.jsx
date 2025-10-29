import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<section className=" px-[40px] h-[100px] w-full flex items-center justify-between text-[#043369] font-semibold bg-[#eaf3ff] shadow-sm">
			<div className="text-2xl">Delok Autos</div>
			<div className="flex items-center gap-[40px]">
				<button className="p-3 rounded-md bg-blue-700 text-white shadow-md">
					Rentals
				</button>
				<Link href={``}>Sell Your Car</Link>
				<Link href={``}>Buy Car</Link>
				<Link href={``}>Contact Us</Link>
				<button className="bg-blue-700 p-2 shadow-sm rounded-md text-blue-500 inline-block">
					Book a Rental
				</button>
			</div>
		</section>
	);
};

export default Header;
