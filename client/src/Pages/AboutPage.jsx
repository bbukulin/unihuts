function AboutPage() {
	return (
		<>
			<main>
				<div className="mx-auto max-w-7xl px-4 py-4">
					<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
						<div className="px-4 py-5 sm:px-6">
							<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
								UniHuts project
							</p>
						</div>
						<div className="mx-auto px-4 py-5 sm:p-6">
							<div className="te mt-2 mb-6 max-w-4xl">
								<h4 className="leading-6 tracking-wide text-zinc-900">
									UniHuts is full-stack web application made by{" "}
									<a
										href="https://www.linkedin.com/in/bbukulin/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary-500 transition duration-300 hover:text-primary-800">
										Borna Bukulin
									</a>{" "}
									as undergraduate thesis at Josip Juraj Strossmayer University
									of Osijek, Faculty of Electrical Engineering, Computer Science
									and Information Technology Osijek.
								</h4>
								<br />
								<p className="tracking-wide text-zinc-900">
									The tech stack used is MERN Stack with Tailwind CSS used for
									styling.
								</p>
								<br />
								<p className="tracking-wide text-zinc-900">
									The full source code and more information is available on{" "}
									<a
										href="https://github.com/bbukulin"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary-500 transition duration-300 hover:text-primary-800">
										GitHub
									</a>
									.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default AboutPage;
