import React from "react";

const Sales = () => {
	return (
		<section className="flex flex-col gap-4 w-full max-w-[1500px] mx-auto py-6">
			<h1 className="text-4xl font-bold">Curated Cars for Sale</h1>
			<p>
				Limited, vetted selection. Fully inspected, clean titles, transparent
				pricing.
			</p>
			{/* sales car cards */}
			<div className="flex flex-wrap justify-between gap-4">
				<div className="bg-white ring-2 ring-slate-200 shadow-md rounded-2xl w-[330px] h-[240px]"></div>
				<div className="bg-white ring-2 ring-slate-200 shadow-md rounded-2xl w-[330px] h-[240px]"></div>
				<div className="bg-white ring-2 ring-slate-200 shadow-md rounded-2xl w-[330px] h-[240px]"></div>
				<div className="bg-white ring-2 ring-slate-200 shadow-md rounded-2xl w-[330px] h-[240px]"></div>
			</div>
		</section>
	);
};

export default Sales;
