import React from "react";

const Purchase = () => {
	return (
		<section
			id="buy"
			className="bg-[#eaf3ff] py-[50px]"
		>
			<div className="w-full max-w-[1500px] flex flex-col gap-4 mx-auto ">
				<h1 className="font-bold text-3xl">Sell Your Car to Us</h1>
				<p className="text-[#667085]">
					Get a fast, fair cash offer. We handle paperwork and payment the same
					day.
				</p>
				{/* cards */}
				<div className="flex gap-3 w-full">
					<div className="flex gap-3">
						{/* tell us about your car */}
						<div className="flex gap-2 w-[180px] h-[200px] rounded-xl ring-1 ring-slate-200 shadow-sm bg-white p-3">
							<span>ico</span>
							<div className="flex flex-col">
								<h2 className="font-bold">1.Tell us about your car</h2>
								<p className="text-[#667085]">
									Year, make, model, mileage, and condition
								</p>
							</div>
						</div>
						{/* Get an instant offer */}
						<div className="flex gap-2 w-[180px] h-[200px] rounded-xl ring-1 ring-slate-200 shadow-sm bg-white p-3">
							<span>ico</span>
							<div className="flex flex-col">
								<h2 className="font-bold">2.Get an instant offer</h2>
								<p className="text-[#667085]">
									No hidden fees, valid for 7 days
								</p>
							</div>
						</div>
						{/* tell us about your car */}
						<div className="flex gap-2 w-[180px] h-[200px] rounded-xl ring-1 ring-slate-200 shadow-sm bg-white p-3">
							<span>ico</span>
							<div className="flex flex-col">
								<h2 className="font-bold">3.Free pickup and payment</h2>
								<p className="text-[#667085]">
									We pay on the spot, and handle DMV
								</p>
							</div>
						</div>
					</div>
					{/* request an offer form */}
					<div className="bg-[#ffffff] rounded-lg shadow-md px-8  py-[40px] flex-1 flex-col gap-6 ">
						<h2 className="my-2 font-bold">Request an Offer</h2>
						<div className="w-full flex items-center gap-3 my-3">
							<input
								className="w-full ring-2 ring-slate-200 rounded-md p-3"
								type="text"
								placeholder="Full name"
							/>
							<input
								className="w-full ring-2 ring-slate-200 rounded-md p-3"
								type="text"
								placeholder="Email"
							/>
						</div>
						<div className="w-full flex items-center gap-2 my-3">
							<input
								className="w-full ring-2 ring-slate-200 rounded-md p-3"
								type="number"
								placeholder="Phone"
							/>
							<input
								className="w-full ring-2 ring-slate-200 rounded-md p-3"
								type="text"
								placeholder="City"
							/>
						</div>
						<div className="w-full flex items-center gap-2 my-3">
							<input
								className="w-full ring-2 ring-slate-200 rounded-md p-3"
								type="text"
								placeholder="Year.Make.Model"
							/>
							<input
								className="w-full ring-2 ring-slate-200 rounded-md p-3"
								type="text"
								placeholder="Mileage"
							/>
						</div>
						{/* condiion details */}
						<textarea
							className="w-full ring-2 ring-slate-200 rounded-md p-3 my-3"
							placeholder="Condition details"
						/>
						<div className="flex items-center justify-between">
							<p>By submitting, you agree to our terms. </p>
							<button className="p-3 rounded-md shadow-md text-white bg-[#0b6cf6]">
								Get My Offer
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Purchase;
