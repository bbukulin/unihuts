import moment from "moment";
import Footer from "../Layouts/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import axios from "axios";

import {
	HiOutlineCash,
	HiOutlineCalendar,
	HiOutlineLockClosed,
	HiOutlineAnnotation,
	HiOutlinePhoneIncoming,
	HiOutlineKey,
	HiOutlineInformationCircle,
	HiOutlineMailOpen,
	HiOutlineViewGrid,
} from "react-icons/hi";

export default function RoomDetails() {
	const params = useParams();

	const [room, setRoom] = useState(null);
	const [message, setMessage] = useState("");

	useEffect(() => {
		const getRoom = async () => {
			const response = await axios.get(`/api/v1/public/room/${params.roomId}`);
			setRoom(response.data.room);
		};

		getRoom();
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
										{room &&
											room.listingImages.map((element, index) => (
												<SwiperSlide key={index}>
													<img
														src={room.listingImages[index].url}
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
												{room && room.listingHeadline}
											</h3>
											<div className="flex">
												<h4 className="text-md md:text-lg">
													{room && room.propertyCountry.label},{" "}
													{room && room.propertyState.label}
													{room && room.propertyCity ? (
														<span>, {room && room.propertyCity.label}</span>
													) : (
														""
													)}
												</h4>
											</div>
											<h4 className="text-md md:text-lg">
												{room && room.propertyAddress}
											</h4>
										</div>

										<div className="group relative rounded-bl-lg rounded-br-lg bg-white p-6 sm:rounded-bl-none">
											<h5 className="md:text-md text-sm tracking-wide first-letter:uppercase">
												{room && room.listingDescription}
											</h5>
										</div>
									</div>
								</section>
								<section>
									<div className="sm:grid-row max-w-none divide-y divide-gray-300 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid-rows-2 sm:gap-px sm:divide-y-0">
										<div className="group relative rounded-tl-lg rounded-tr-lg bg-white p-6 sm:rounded-tr-none">
											<h3 className="text-md font-semibold md:text-lg">
												More about the property
											</h3>
											<div className="space-y-1">
												<p className="text-sm">
													Shared spaces{" "}
													{room &&
														room.sharedSpace
															.map((element) => {
																return element;
															})
															.join(", ")}
												</p>
												<p className="text-sm">
													Appliances{" "}
													{room &&
														room.appliances
															.map((element) => {
																return element;
															})
															.join(", ")}
												</p>
												<p className="text-sm">
													Comfort includes{" "}
													{room &&
														room.comfort
															.map((element) => {
																return element;
															})
															.join(", ")}
												</p>
												<p className="text-sm">
													Nearby locations{" "}
													{room &&
														room.nearby
															.map((element) => {
																return element;
															})
															.join(", ")}
												</p>
											</div>
										</div>
										<div className="group relative rounded-bl-lg rounded-br-lg bg-white p-6 sm:rounded-bl-none">
											<h3 className="text-md font-semibold md:text-lg">
												Existing & new roommates
											</h3>
											<div className="space-y-1">
												<p className="text-sm">
													{room && room.existingPetOwner ? (
														<span>Pets allowed</span>
													) : (
														<span>Pets not allowed</span>
													)}
												</p>
												<p className="text-sm">
													{room && room.existingSmoker ? (
														<span>Smoking allowed</span>
													) : (
														<span>Smoking is not allowed</span>
													)}
												</p>
												<p className="text-sm">
													{room && room.numberOfMales > 0 ? (
														<span>
															Currently {room.numberOfMales} male resident
															{room.numberOfMales > 1 && "s"}
														</span>
													) : (
														<span>
															There are no male residents at the moment
														</span>
													)}
												</p>
												<p className="text-sm">
													{room && room.numberOfFemales > 0 ? (
														<span>
															Currently {room.numberOfFemales} female resident
															{room.numberOfFemales > 1 && "s"}
														</span>
													) : (
														<span>
															There are no female residents at the moment
														</span>
													)}
												</p>
												<p className="text-sm">
													New roommate preferences{" "}
													{room &&
														room.newRoommate
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
													<HiOutlineAnnotation className="h-5 w-5 text-neutral-300" />
													<h3 className="text-sm first-letter:uppercase">
														{room && room.advertiserStatus}
													</h3>
												</div>

												<div className="flex items-center space-x-2 py-3">
													<HiOutlinePhoneIncoming className="h-5 w-5 text-neutral-300" />
													<h3 className="text-sm">
														+ {room && room.advertiserPhone}
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
																		room && room.advertiserMail
																	}?Subject=${
																		room && room.listingHeadline
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
												About the property
											</h2>
											<div className="mt-6 divide-y">
												<div className="flex items-center space-x-2 py-3">
													<HiOutlineKey className="h-5 w-5 text-neutral-300" />
													<h3 className="text-sm">
														{room && room.propertyType}
													</h3>
												</div>
												<div className="flex items-center space-x-2 py-3">
													<HiOutlineViewGrid className="h-5 w-5 text-neutral-300" />
													<h3 className="text-sm">
														{room && room.totalRooms} room
														{room && room.totalRooms > 1 && "s"},{" "}
														{room && room.totalBathrooms} bath
														{room && room.totalBathrooms > 1 && "s"},{" "}
														{room && room.totalArea} m&#178;
													</h3>
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
												About the room
											</h2>
											<div className="mt-6 divide-y">
												<div className="flex items-center space-x-2 py-3">
													<HiOutlineLockClosed className="h-5 w-5 text-neutral-300" />
													<h3 className="text-sm line-clamp-1">
														{room && room.roomType} room
													</h3>
												</div>
												<div className="flex items-center space-x-2 py-3">
													<HiOutlineCalendar className="h-5 w-5 text-neutral-300" />
													<div>
														<h3 className="text-sm line-clamp-1">
															Available from{" "}
															{moment(room && room.availableFrom).format(
																"MMM Do"
															)}
														</h3>
														{room && room.availableTo ? (
															<h3 className="text-sm line-clamp-1">
																Available to{" "}
																{moment(room.availableTo).format("MMM Do")}
															</h3>
														) : (
															""
														)}
													</div>
												</div>
												<div className="flex items-center space-x-2 py-3">
													<HiOutlineCash className="h-5 w-5 text-neutral-300" />
													<div>
														<h3 className="text-sm">
															{room && room.priceMonth} HRK / month
														</h3>
														<h3 className="text-sm">
															{room && room.securityDeposit} HRK / deposit
														</h3>
													</div>
												</div>

												<div className="flex items-center space-x-2 py-3">
													<HiOutlineInformationCircle className="h-5 w-5 text-neutral-300" />
													<div>
														<h3 className="text-sm line-clamp-1">
															{room && room.furnished
																? "Furnished room"
																: "Not furnished"}
														</h3>
														<h3 className="text-sm line-clamp-1">
															{room && room.utilityBills
																? "Utility bills included"
																: "Utility bills not included"}
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
