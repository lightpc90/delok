import React from "react";
import { FiMapPin } from "react-icons/fi";
import { LuCalendarCheck, LuCar } from "react-icons/lu";

const Rental = () => {
	return (
		<section
			id="rental"
			className=" py-[50px]"
		>
			<div className="w-full max-w-[1500px] mx-auto flex flex-col gap-4 px-8 lg:px-0">
				<h1 className="text-3xl font-bold">Car Rentals</h1>
				<p className="text-[#667085]">
					Find the perfect ride for your trip. Transparent pricing, daily or
					weekly plans, and simple pickup
				</p>
				{/* input forms */}
				<div className="bg-white ring-2 ring-slate-200 shadow-md rounded-lg flex flex-col gap-4 p-6 mx-auto w-full">
					<div className="w-full flex flex-wrap items-start lg:items-center gap-3">
						<label className="lg:flex-1 w-full relative">
							<span className="absolute right-2 top-[50%] translate-y-[-50%] ">
								<FiMapPin />
							</span>
							<input
								className="ring-2 ring-slate-200 rounded-md shadow-md p-3 w-full"
								type="text"
								placeholder="Location"
							/>
						</label>

						<label className="lg:flex-1 w-full relative">
							<span className="absolute right-2 top-[50%] translate-y-[-50%] ">
								<LuCalendarCheck />
							</span>

							<input
								className="ring-2 ring-slate-200 rounded-md shadow-md p-3 w-full"
								type="text"
								placeholder="Date"
							/>
						</label>
						<label className="lg:flex-1 w-full relative">
							<span className="absolute right-2 top-[50%] translate-y-[-50%] ">
								<LuCar />
							</span>
							<input
								className="ring-2 ring-slate-200 rounded-md shadow-md p-3 w-full"
								type="text"
								placeholder="Vehicle class"
							/>
						</label>
					</div>
					{/* car cards */}
					<div className="w-full flex flex-wrap my-[20px] gap-4 justify-between">
						<div className=" ring-2 ring-slate-200 shadow-md rounded-md w-[300px] h-[350px]"></div>
						<div className=" ring-2 ring-slate-200 shadow-md rounded-md w-[300px] h-[350px]"></div>
						<div className=" ring-2 ring-slate-200 shadow-md rounded-md w-[300px] h-[350px]"></div>
						<div className=" ring-2 ring-slate-200 shadow-md rounded-md w-[300px] h-[350px]"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Rental;
