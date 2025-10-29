import React from "react";

const Rental = () => {
	return (
		<section className="bg-slate-200 flex flex-col gap-4 my-[20px] py-[40px]">
			<div className="w-full max-w-[1500px] mx-auto">
				<h1 className="text-3xl font-bold">Car Rentals</h1>
				<p>
					Find the perfect ride for your trip. Transparent pricing, daily or
					weekly plans, and simple pickup
				</p>
				{/* input forms */}
				<div className="bg-white ring-2 ring-slate-200 shadow-md rounded-lg flex flex-col gap-4 w-[95%] 3xl:w-[80%] p-6 mx-auto">
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
					<div className="my-[20px] ring-2 ring-slate-200 shadow-md rounded-md w-[250px] h-[300px]"></div>
				</div>
			</div>
		</section>
	);
};

export default Rental;
