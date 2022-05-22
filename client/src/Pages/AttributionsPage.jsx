import React from "react";

function AttributionsPage() {
	return (
		<>
			<main>
				<div className="mx-auto max-w-7xl px-4 py-4">
					<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
						<div className="px-4 py-5 sm:px-6">
							<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
								Project attributions
							</p>
						</div>
						<div className="mx-auto px-4 py-5 sm:p-6">
							<div className="mt-2 mb-6">
								<ul className="list-disc px-4 sm:p-6">
									<li className="leading-6 tracking-wide text-zinc-900">
										{" "}
										Images by{" "}
										<a
											href="https://unsplash.com/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary-500 transition duration-300 hover:text-primary-800">
											Unsplash
										</a>
										.
									</li>
									<li className="leading-6 tracking-wide text-zinc-900">
										{" "}
										Illustrations by{" "}
										<a
											href="https://iconscout.com/illustration-pack/indian-doodle"
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary-500 transition duration-300 hover:text-primary-800">
											IconScout
										</a>
										.
									</li>
									<li className="leading-6 tracking-wide text-zinc-900">
										{" "}
										Placeholder logo by{" "}
										<a
											href="https://logoipsum.com/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary-500 transition duration-300 hover:text-primary-800">
											logoipsum
										</a>
										.
									</li>
									<li className="leading-6 tracking-wide text-zinc-900">
										{" "}
										SVG Vectors and icons by{" "}
										<a
											href="https://www.svgrepo.com/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary-500 transition duration-300 hover:text-primary-800">
											SVG Repo
										</a>
										.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default AttributionsPage;
