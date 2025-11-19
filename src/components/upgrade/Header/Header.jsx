import Link from "next/link";
import { useState } from "react";
import { LuCalendarCheck } from "react-icons/lu";
import { MdOutlineMenu, MdMenuOpen } from "react-icons/md";

const Header = () => {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<section
			id="header"
			className="px-[40px] h-[100px] w-full flex items-center justify-between text-[#043369] font-semibold bg-[#eaf3ff] shadow-sm fixed left-0 top-0"
		>
			<div className="text-2xl">Delok Autos</div>
			<div className="lg:flex items-center gap-[40px] hidden">
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
					className="bg-blue-950 p-2 shadow-sm rounded-md text-blue-500 flex items-center gap-2 "
				>
					<LuCalendarCheck />
					Book a Rental
				</Link>
			</div>
			<div className="flex lg:hidden">
				<button
					onClick={() => setModalOpen(!modalOpen)}
					className="transition-all delay-100 duration-300"
				>
					{modalOpen ? <MdMenuOpen size={27} /> : <MdOutlineMenu size={27} />}
				</button>
			</div>
		</section>
	);
};

export default Header;
