import React from "react";

const Contact = () => {
	return (
		<section
			id="contact"
			className="bg-[#eaf3ff] py-[50px]"
		>
			<div className="w-full max-w-[1500px] flex flex-col gap-4 mx-auto px-8 lg:px-0 ">
				<h1 className="text-4xl font-bold">Contact Us</h1>
				<p>
					Question about rentals, selling, or our inventory? We are here to
					help.
				</p>
				{/* Cards */}
				<div className="flex items-center flex-wrap gap-4 justify-between">
					{/* Enquiry form card */}
					<div className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-4 mx-w-[550px]">
						<h3 className="font-bold">Send an inquiry</h3>
						<div className="flex items-center gap-3 w-full">
							<input
								type="text"
								placeholder="Your name"
								name="name"
								className="rounded-xl shadow-md ring-2 ring-slate-200 p-3"
							/>
							<input
								type="email"
								placeholder="Email"
								name="name"
								className="rounded-xl shadow-md ring-2 ring-slate-200 p-3"
							/>
						</div>
						<select className="p-3 rounded-xl shadow-md ring-2 ring-slate-200 outline-none">
							<option>Topic (Rentals, Sell, Buy)</option>
						</select>
						<textarea
							rows={5}
							placeholder="How can we help"
							className="shadow-md rounded-xl p-3 ring-2 ring-slate-200"
						/>
						<button className="bg-blue-700 p-3 text-white rounded-2xl shadow-md">
							Submit
						</button>
					</div>
					{/* Map */}
					<div className="bg-white rounded-2xl shadow-md w-[600px] h-[400px] p-6">
						<p className="font-bold">Visit our office</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
