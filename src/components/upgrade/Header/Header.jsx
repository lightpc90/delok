import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<section className=" h-[80px] w-full flex items-center justify-between">
			<div>Delok Autos</div>
			<div>
				<button>Rentals</button>
				<Link href={``}>Sell Your Car</Link>
				<Link href={``}>Buy Car</Link>
				<Link href={``}>Contact Us</Link>
				<button>Book a Rental</button>
			</div>
		</section>
	);
};

export default Header;
