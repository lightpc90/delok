import React from "react";

const Hero = () => {
	return (
		<section
			id="hero"
			className="bg-white py-[50px] my-[100px]"
		>
			<div className="flex flex-wrap items-center w-full max-w-[1500px] mx-auto">
				<div className="flex-1 flex-col gap-4">
					<div className="mb-4">
						<p className="text-sm text-sky-600 bg-slate-200 rounded-lg py-2 px-3 w-fit">
							Premium rentals. easy sales
						</p>
						<h1 className="font-bold text-[#0f1724] text-4xl">
							Car Rentals, Easy Sales, <br />
							and Curated Buys
						</h1>
					</div>
					<p className="mb-4 text-[#667085]">
						Professional service with flexible rentals,
						<br /> instant cash offers for your car, <br />
						and a handpicked selection of vehicles for sale
					</p>
					<div className="flex gap-2 font-bold">
						<button className="bg-blue-700 text-white py-3 px-6 rounded-3xl shadow-md">
							Rent a Car
						</button>
						<button className="bg-slate-200 text-blue-700 py-3 px-6 rounded-3xl shadow-md">
							Sell Your Car
						</button>
						<button className="bg-slate-200 text-blue-700 py-3 px-6 rounded-3xl shadow-md">
							Browse Cars
						</button>
					</div>
				</div>
				{/* location form */}
				<div className="ring-2 ring-slate-100 shadow-lg rounded-md p-8 flex flex-col">
					<div>
						<span>ico</span>
						<select className="ring-2 ring-slate-200 p-2 rounded-md m-2 shadow-sm ">
							<option>Pickup location</option>
						</select>
					</div>
					<div>
						<span>ico</span>
						<input
							type="date"
							placeholder="Start date"
							className="ring-2 ring-slate-200 p-2 rounded-md m-2 shadow-sm "
						/>
						<input
							type="date"
							placeholder="End date"
							className="ring-2 ring-slate-200 p-2 rounded-md m-2 shadow-sm "
						/>
					</div>
					<div>
						<spav>ico</spav>
						<select className="ring-2 ring-slate-200 p-2 rounded-md m-2 shadow-sm ">
							<option>Driver age</option>
						</select>
						<select className="ring-2 ring-slate-200 p-2 rounded-md m-2 shadow-sm ">
							<option>Car type</option>
						</select>
					</div>
					<button className="bg-blue-800 text-white p-3 my-2 rounded-md shadow-md">
						Search Rentals
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
