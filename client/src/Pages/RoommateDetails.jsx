import moment from "moment";
import Footer from "../Layouts/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import {
	HiOutlineCash,
	HiOutlineCalendar,
	HiOutlineLockClosed,
	HiOutlinePhoneIncoming,
	HiOutlineInformationCircle,
	HiOutlineMailOpen,
	HiOutlineBriefcase,
} from "react-icons/hi";

import { BsGenderAmbiguous } from "react-icons/bs";
import { HiOutlineCake } from "react-icons/hi";

export default function RoommateDetails() {
	const params = useParams();

	const [roommate, setRoommate] = useState(null);
	const [message, setMessage] = useState("");

	useEffect(() => {
		const getRoommate = async () => {
			const response = await axios.get(
				`/api/v1/public/roommate/${params.roommateId}`
			);
			setRoommate(response.data.roommate);
		};

		getRoommate();
		// eslint-disable-next-line
	}, []);

	const onChange = (e) => setMessage(e.target.value);

	return (
		<>
			<div className="min-h-full">
				<main className="my-6">
					<div className="mx-auto max-w-3xl px-4 lg:max-w-7xl">
						{/* Main */}
						<div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
							{/* Left */}
							<div className="grid grid-cols-1 gap-4 lg:col-span-2">
								{/* Listing images */}
								<section>
									<Swiper
										pagination={{
											dynamicBullets: true,
										}}
										modules={[Pagination]}
										className="h-full w-full cursor-grab overflow-hidden rounded-lg shadow">
										{roommate &&
											roommate.images.map((element, index) => (
												<SwiperSlide key={index}>
													<img
														src={roommate.images[index].url}
														alt="Listing images"
														className="h-full w-full object-cover object-center"
													/>
												</SwiperSlide>
											))}
									</Swiper>
								</section>

								{/* Listing headline and desc */}
								<section>
									<div className="sm:grid-row max-w-none divide-y divide-gray-300 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid-rows-2 sm:gap-px sm:divide-y-0">
										<div className="group relative rounded-tl-lg rounded-tr-lg bg-white p-6 sm:rounded-tr-none">
											<h3 className="text-md font-semibold first-letter:uppercase md:text-xl">
												{roommate && roommate.headline}
											</h3>
											<div className="flex">
												<h4 className="text-md md:text-lg">
													{roommate && roommate.desiredCountry.label},{" "}
													{roommate && roommate.desiredState.label}
													{roommate && roommate.desiredCity ? (
														<span>, {roommate.desiredCity.label}</span>
													) : (
														""
													)}
												</h4>
											</div>
										</div>

										<div className="group relative rounded-bl-lg rounded-br-lg bg-white p-6 sm:rounded-bl-none">
											<h5 className="md:text-md text-sm tracking-wide first-letter:uppercase">
												{roommate && roommate.description}
											</h5>
										</div>
									</div>
								</section>
								<section>
									<div className="sm:grid-row max-w-none divide-y divide-gray-300 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid-rows-2 sm:gap-px sm:divide-y-0">
										<div className="group relative rounded-tl-lg rounded-tr-lg bg-white p-6 sm:rounded-tr-none">
											<h3 className="text-md font-semibold md:text-lg">
												Desired property
											</h3>
											<div className="space-y-1">
												<p className="text-sm">
													Appliances{" "}
													{roommate &&
														roommate.appliances
															.map((element) => {
																return element;
															})
															.join(", ")}
												</p>
												<p className="text-sm">
													Comfort includes{" "}
													{roommate &&
														roommate.comfort
															.map((element) => {
																return element;
															})
															.join(", ")}
												</p>
												<p className="text-sm">
													Nearby locations{" "}
													{roommate &&
														roommate.nearby
															.map((element) => {
																return element;
															})
															.join(", ")}
												</p>
											</div>
										</div>
										<div className="group relative rounded-bl-lg rounded-br-lg bg-white p-6 sm:rounded-bl-none">
											<h3 className="text-md font-semibold md:text-lg">
												More about the advertiser
											</h3>
											<div className="space-y-1">
												<p className="text-sm">
													Interests{" "}
													{roommate &&
														roommate.interests
															.map((element) => {
																return element;
															})
															.join(", ")}
												</p>
											</div>
										</div>
									</div>
								</section>
							</div>

							{/* Right */}
							<div className="grid grid-cols-1 gap-4">
								{/* Advertiser information */}
								<section>
									<div className="overflow-hidden rounded-lg bg-white shadow">
										<div className="p-6">
											<h2 className="text-base font-medium text-gray-900">
												About the advertiser
											</h2>
											<div className="mt-6 divide-y">
												<div className="flex items-center space-x-2 py-3">
													<BsGenderAmbiguous className="h-5 w-5 text-neutral-300" />
													<h3 className="text-sm">
														{roommate && roommate.gender}
													</h3>
												</div>
												<div className="flex items-center space-x-2 py-3">
													<HiOutlineCake className="h-5 w-5 text-neutral-300" />
													<div>
														<h3 className="text-sm">
															{roommate && roommate.age},{" "}
															{roommate && roommate.occupation}
														</h3>
													</div>
												</div>
												<div className="flex items-center space-x-2 py-3">
													<HiOutlineInformationCircle className="h-5 w-5 text-neutral-300" />
													<div>
														<h3 className="text-sm line-clamp-1">
															{roommate && roommate.smoker
																? "Smoker"
																: "Not smoker"}
														</h3>
														<h3 className="text-sm line-clamp-1">
															{roommate && roommate.petOwner
																? "Pet owner"
																: "Not pet owner"}
														</h3>
													</div>
												</div>
												<div className="flex items-center space-x-2 py-3">
													<HiOutlinePhoneIncoming className="h-5 w-5 text-neutral-300" />
													<h3 className="text-sm">
														+ {roommate && roommate.phoneNumber}
													</h3>
												</div>
												<div className="flex items-start space-x-2 py-3">
													<HiOutlineMailOpen className="h-5 w-5 text-neutral-300" />
													<h3 className="text-sm">
														<form className="flex flex-col">
															<label
																htmlFor="message"
																className="mb-2 block text-sm font-medium text-neutral-700">
																Write your message
															</label>
															<div className="mx-auto w-full">
																<textarea
																	name="message"
																	id="message"
																	value={message}
																	onChange={onChange}
																	placeholder="Ask about more information"
																	className="w-full rounded-md border-2 border-neutral-200 bg-neutral-50 shadow-sm transition duration-500 hover:border-primary-400 hover:shadow-md focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"></textarea>
																<a
																	href={`mailto:${
																		roommate && roommate.advertiserMail
																	}?Subject=${
																		roommate && roommate.headline
																	}&body=${message}`}>
																	<button
																		type="button"
																		className="w-full rounded-md border-2 border-primary-500 bg-primary-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition duration-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-800 focus:ring-offset-2">
																		Contact advertiser
																	</button>
																</a>
															</div>
														</form>
													</h3>
												</div>
											</div>
										</div>
									</div>
								</section>

								{/* About the property */}
								<section>
									<div className="overflow-hidden rounded-lg bg-white shadow">
										<div className="p-6">
											<h2 className="text-base font-medium text-gray-900">
												Desired property
											</h2>
											<div className="mt-6 divide-y">
												<div className="flex items-center space-x-2 py-3">
													<HiOutlineLockClosed className="h-5 w-5 text-neutral-300" />
													<h3 className="text-sm">
														{roommate && roommate.desiredRoomType}
													</h3>
												</div>
												<div className="flex items-center space-x-2 py-3">
													<HiOutlineCalendar className="h-5 w-5 text-neutral-300" />
													<h3 className="text-sm line-clamp-1">
														Move in{" "}
														{moment(roommate && roommate.moveInDate).format(
															"MMM Do"
														)}
													</h3>
												</div>
												<div className="flex items-center space-x-2 py-3">
													<HiOutlineCash className="h-5 w-5 text-neutral-300" />
													<div>
														<h3 className="text-sm">
															{roommate && roommate.budget} budget / month
														</h3>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>

								{/* About the room */}
								<section>
									<div className="overflow-hidden rounded-lg bg-white shadow">
										<div className="p-6">
											<h2 className="text-base font-medium text-gray-900">
												Desired future roommate
											</h2>
											<div className="mt-6 divide-y">
												<div className="flex items-center space-x-2 py-3">
													<BsGenderAmbiguous className="h-5 w-5 text-neutral-300" />
													<h3 className="text-sm">
														{roommate && roommate.preferredGender}
													</h3>
												</div>
												<div className="flex items-center space-x-2 py-3">
													<HiOutlineBriefcase className="h-5 w-5 text-neutral-300" />
													<h3 className="text-sm">
														{roommate && roommate.preferredOccupation}
													</h3>
												</div>
												<div className="flex items-center space-x-2 py-3">
													<HiOutlineInformationCircle className="h-5 w-5 text-neutral-300" />
													<div>
														<h3 className="text-sm line-clamp-1">
															{roommate && roommate.allowsPets
																? "Allows pets"
																: "Doesn't allow pets"}
														</h3>
														<h3 className="text-sm line-clamp-1">
															{roommate && roommate.allowsSmoking
																? "Allows smoking"
																: "Doesn't allow smoking"}
														</h3>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</>
	);
}
