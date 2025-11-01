import React from "react";

const Rental = () => {
	return (
		<section
			id="rental"
			className=" py-[50px]"
		>
			<div className="w-full max-w-[1500px] mx-auto flex flex-col gap-4">
				<h1 className="text-3xl font-bold">Car Rentals</h1>
				<p className="text-[#667085]">
					Find the perfect ride for your trip. Transparent pricing, daily or
					weekly plans, and simple pickup
				</p>
				{/* input forms */}
				<div className="bg-white ring-2 ring-slate-200 shadow-md rounded-lg flex flex-col gap-4 p-6 mx-auto w-full">
					<div className="w-full flex items-center gap-3">
						<label className="flex-1 w-full">
							<input
								className="ring-2 ring-slate-200 rounded-md shadow-md p-3 w-full"
								type="text"
								placeholder="Location"
							/>
						</label>
						<label className="flex-1 w-full">
							<input
								className="ring-2 ring-slate-200 rounded-md shadow-md p-3 w-full"
								type="text"
								placeholder="Date"
							/>
						</label>
						<label className="flex-1 w-full">
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
