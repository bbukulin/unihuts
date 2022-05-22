import { Link } from "react-router-dom";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import discussion from "../Assets/Illustrations/discussion.svg";
import megafon from "../Assets/Illustrations/megafon.svg";
import Footer from "../Layouts/Footer";

function NewListing() {
	return (
		<>
			<div className="relative overflow-hidden pt-16 pb-32">
				<div className="relative">
					<div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
						<div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
							<div>
								<div className="mt-6">
									<h2 className="text-xl font-extrabold tracking-tight text-neutral-900 md:text-2xl">
										Advertise spare room
									</h2>
									<p className="text-md mt-4 text-neutral-500 md:text-lg">
										You are looking for new roommate to occupy an empty room in
										your apartment? Advertise your spare room for free and find
										yourself an ideal roommate.
									</p>
									<div className="mt-6">
										<Link to="/room">
											<PrimaryButton type="button" label="Seek a roommate" />
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-12 sm:mt-16 lg:mt-0">
							<div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
								<div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
									<img
										className="hidden lg:block lg:h-full lg:w-full"
										src={megafon}
										alt="People"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-24">
					<div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
						<div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
							<div>
								<div className="mt-6">
									<h2 className="text-xl font-extrabold tracking-tight text-neutral-900 md:text-2xl">
										Advertise potential roommate
									</h2>
									<p className="text-md mt-4 text-neutral-500 md:text-lg">
										You are looking for a spare room? <br /> Create a free
										listing so other people can easily contact you.
									</p>
									<div className="mt-6">
										<Link to="/roommate">
											<PrimaryButton type="button" label="Seek a room" />
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-12 sm:mt-16 lg:mt-0">
							<div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
								<img
									className="hidden lg:block lg:h-full lg:w-full"
									src={discussion}
									alt="People"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default NewListing;
