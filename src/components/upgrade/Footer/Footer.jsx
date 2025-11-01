import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<section
			id="footer"
			className="bg-[#eaf3ff] py-[50px] text-[#043369]"
		>
			<div className="ring-2 ring-slate-200 max-w-[1500px] bg-[#f7faff] py-6 mx-auto flex flex-wrap justify-between px-6">
				{/* Website title */}
				<div className="">
					<div className="flex items-center gap-3 mb-2">
						ico <h2 className="font-bold text-3xl">Delok Autos</h2>
					</div>
					<p>
						professional rentals, easy sales,
						<br /> and a curated car selection <br /> in one place.
					</p>
				</div>
				{/* quick links */}
				<div className="flex flex-col gap-4">
					<p className="mb-2 font-bold text-xl">Quick Links</p>
					<Link href={``}>Rentals</Link>
					<Link href={``}>Sell Your Car</Link>
					<Link href={``}>Buy Car</Link>
					<Link href={``}>Contact</Link>
				</div>
				{/* Legal */}
				<div className="flex flex-col gap-4">
					<p className="mb-2 font-bold text-xl">Legal</p>
					<Link href={``}>Terms of Service</Link>
					<Link href={``}>Privacy Policy</Link>
					<Link href={``}>Cookie Policy</Link>
				</div>
				{/* Legal */}
				<div className="flex flex-col gap-4">
					<p className="mb-2 font-bold text-xl">Hours</p>
					<Link href={``}>Mon-Fri: 9am-6pm</Link>
					<Link href={``}>Sat: 10am-4pm</Link>
					<Link href={``}>Sun: Closed</Link>
				</div>
			</div>
		</section>
	);
};

export default Footer;
