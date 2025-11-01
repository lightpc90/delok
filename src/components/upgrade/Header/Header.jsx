import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<section
			id="header"
			className="px-[40px] h-[100px] w-full flex items-center justify-between text-[#043369] font-semibold bg-[#eaf3ff] shadow-sm fixed left-0 top-0"
		>
			<div className="text-2xl">Delok Autos</div>
			<div className="flex items-center gap-[40px]">
				<Link
					href={`/#rental`}
					className="p-3 rounded-md bg-blue-700 text-white shadow-md"
				>
					Rentals
				</Link>
				<Link href={`/#buy`}>Sell Your Car</Link>
				<Link href={`/#sale`}>Buy Car</Link>
				<Link href={`/#contact`}>Contact Us</Link>
				<Link
					href={`/#booking`}
					className="bg-blue-950 p-2 shadow-sm rounded-md text-blue-500 inline-block"
				>
					Book a Rental
				</Link>
			</div>
		</section>
	);
};

export default Header;
