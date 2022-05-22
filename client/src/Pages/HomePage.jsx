import Footer from "../Layouts/Footer";
import { Link } from "react-router-dom";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

function HomePage() {
	return (
		<>
			<div className="mx-auto max-w-7xl px-4 py-4">
				<div>
					<main>
						<div className="flex flex-col justify-center pt-8 lg:flex-row">
							<div>
								<div className="mt-4">
									<div className="mt-6 sm:max-w-xl">
										<h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 lg:text-5xl">
											Flat sharing, redefined.
										</h1>
										<div className="max-w-sm">
											<p className="mt-12 text-lg text-neutral-700 lg:text-xl">
												In today's world, most people choose to live together.
												Sharing a room with someone who has the same interests
												and hobbies as you can be a great life experience.
											</p>
											<p className="mt-4 text-lg text-neutral-700 lg:text-xl">
												Here at{" "}
												<span className="font-semibold text-neutral-900">
													UniHuts
												</span>{" "}
												we strive to make that experience easier and safer.
											</p>
											<div className="py-8">
												<Link to="/rooms" className="flex items-center">
													<span className="text-primary-500 transition duration-500 hover:text-primary-800">
														Room listings
													</span>
													<HiOutlineChevronDoubleRight className="text-md ml-2" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="mb-2 flex max-w-3xl justify-end">
								<img
									className="h-5/6 w-5/6 object-cover shadow"
									src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
									alt="Property"
								/>
							</div>
						</div>

						<div className="flex flex-col justify-between pt-8 lg:flex-row">
							<div className="max-w-3xl">
								<img
									className="h-5/6 w-5/6 object-cover shadow"
									src="https://images.unsplash.com/photo-1604709177595-ee9c2580e9a3"
									alt="Property"
								/>
							</div>
							<div>
								<div className="mt-6 sm:max-w-xl">
									<h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 lg:text-5xl">
										New people, <br /> at one place.
									</h1>
									<div className="max-w-sm">
										<p className="mt-12 text-lg text-neutral-700 lg:text-xl">
											Everyone's idea of the perfect roommate is different, so
											search based on what's important to you.
										</p>
										<p className="mt-12 text-lg text-neutral-700 lg:text-xl">
											Looking for a room? List yourself as potential roommate,
											share your interests and find your next home.
										</p>
									</div>

									<div className="py-8">
										<Link to="/roommates" className="flex items-center">
											<span className="text-primary-500 transition duration-500 hover:text-primary-800">
												Roommate listings
											</span>
											<HiOutlineChevronDoubleRight className="text-md ml-2" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default HomePage;
