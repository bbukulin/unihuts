import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";

import Alert from "../../Components/Alerts/Alert";
import UpdateRoomValidation from "./UpdateRoomValidation";

import PhoneInput from "../../Components/Inputs/PhoneInput";
import TextInput from "../../Components/Inputs/TextInput";
import TextArea from "../../Components/Inputs/TextArea";
import PriceInput from "../../Components/Inputs/PriceInput";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import DiscardButton from "../../Components/Buttons/DiscardButton";
import ToggleSwitch from "../../Components/Buttons/ToggleSwitch";
import CustomDatePicker from "../../Components/DatePicker/CustomDatePicker";
import RadioGroupCardsNote from "../../Components/RadioGroups/RadioGroupCardsNote";
import RadioGroupCheck from "../../Components/RadioGroups/RadioGroupCheck";

import SharedSpace from "../RoomListing/Amenities/SharedSpace";
import Appliances from "../RoomListing/Amenities/Appliances";
import Comfort from "../RoomListing/Amenities/Comfort";
import NearbyLocations from "../RoomListing/Amenities/NearbyLocations";
import Interests from "../RoomListing/Interests/Interests";
import NewRoommate from "../RoomListing/NewRoommate/NewRoommate";

const UpdateRoomForm = () => {
	const navigate = useNavigate();
	const { editRoom, showAlert, room, isLoading } = useAppContext();

	return (
		<div>
			{showAlert && (
				<div className="py-2">
					<Alert />
				</div>
			)}
			<h1 className="ml-3 py-2 text-lg font-medium">Update room listing</h1>
			<Formik
				validationSchema={UpdateRoomValidation}
				initialValues={{
					advertiserStatus: room.advertiserStatus,
					advertiserMail: room.advertiserMail,
					advertiserPhone: room.advertiserPhone,
					propertyType: room.propertyType,
					totalRooms: room.totalRooms,
					totalBathrooms: room.totalBathrooms,
					totalArea: room.totalArea,
					propertyAddress: room.propertyAddress,
					sharedSpace: room.sharedSpace,
					appliances: room.appliances,
					comfort: room.comfort,
					nearby: room.nearby,
					priceMonth: room.priceMonth,
					securityDeposit: room.securityDeposit,
					roomType: room.roomType,
					availableFrom: room.availableFrom,
					availableTo: room.availableTo,
					furnished: room.furnished,
					utilityBills: room.utilityBills,
					numberOfMales: room.numberOfMales,
					numberOfFemales: room.numberOfFemales,
					existingSmoker: room.existingSmoker,
					existingPetOwner: room.existingPetOwner,
					interests: room.interests,
					newRoommate: room.newRoommate,
					listingHeadline: room.listingHeadline,
					listingDescription: room.listingDescription,
				}}
				onSubmit={({
					advertiserStatus,
					advertiserMail,
					advertiserPhone,
					propertyType,
					totalRooms,
					totalBathrooms,
					totalArea,
					propertyAddress,
					sharedSpace,
					appliances,
					comfort,
					nearby,
					priceMonth,
					securityDeposit,
					roomType,
					availableFrom,
					availableTo,
					furnished,
					utilityBills,
					numberOfMales,
					numberOfFemales,
					existingSmoker,
					existingPetOwner,
					interests,
					newRoommate,
					listingHeadline,
					listingDescription,
				}) => {
					editRoom({
						advertiserStatus,
						advertiserMail,
						advertiserPhone,
						propertyType,
						totalRooms,
						totalBathrooms,
						totalArea,
						propertyAddress,
						sharedSpace,
						appliances,
						comfort,
						nearby,
						priceMonth,
						securityDeposit,
						roomType,
						availableFrom,
						availableTo,
						furnished,
						utilityBills,
						numberOfMales,
						numberOfFemales,
						existingSmoker,
						existingPetOwner,
						interests,
						newRoommate,
						listingHeadline,
						listingDescription,
					});
					navigate("/my-rooms");
				}}>
				<Form>
					<div className="space-y-4">
						{/* FIRST SECTION */}
						<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
							<div className="px-4 py-5 sm:px-6">
								<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
									General information
								</p>
							</div>
							<div className="px-4 py-5 sm:p-6">
								<div className="mx-auto mt-2 mb-6 max-w-sm space-y-4">
									<RadioGroupCardsNote
										label="Your status"
										name="advertiserStatus"
										items={[
											{
												id: 1,
												label: "Current roommate",
												value: "current roommate",
												description:
													"You're living on the property at the moment.",
											},
											{
												id: 2,
												label: "Former roommate",
												value: "former roommate",
												description:
													"You're moving out and need someone to replace you.",
											},
										]}
									/>

									<TextInput
										label="Your email address"
										type="email"
										name="advertiserMail"
									/>

									<PhoneInput
										label="Your phone number"
										type="number"
										name="advertiserPhone"
										placeholder="91 911 1234"
									/>

									<RadioGroupCheck
										label="Property type"
										name="propertyType"
										items={[
											{
												id: 1,
												label: "Apartment",
												value: "Apartment",
											},
											{
												id: 2,
												label: "House",
												value: "House",
											},
										]}
									/>
									{/* total rooms & bathrooms */}
									<div className="flex items-center space-x-4">
										<TextInput
											label="Total rooms"
											type="number"
											name="totalRooms"
										/>
										<TextInput
											label="Total baths"
											type="number"
											name="totalBathrooms"
										/>
										<TextInput
											label="Area [m&#178;]"
											type="number"
											name="totalArea"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
							<div className="px-4 py-5 sm:px-6">
								<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
									Property location
								</p>
							</div>
							<div className="px-4 py-5 sm:p-6">
								<div className="mx-auto mt-2 mb-6 max-w-sm space-y-4">
									<TextInput
										label="Address"
										type="text"
										name="propertyAddress"
									/>
								</div>
							</div>
						</div>

						{/* SECOND SECTION */}
						<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
							<div className="flex items-center justify-between px-4 py-5 sm:px-6">
								<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
									Property information
								</p>
								<p className="text-xs font-medium tracking-wide text-neutral-500">
									Optional
								</p>
							</div>
							<div className="px-4 py-5 sm:p-6">
								<div className="mx-auto mt-2 mb-6 space-y-8">
									<SharedSpace />
									<Appliances />
									<Comfort />
									<NearbyLocations />
								</div>
							</div>
						</div>

						{/* THIRD SECTION */}
						<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
							<div className="px-4 py-5 sm:px-6">
								<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
									Room information
								</p>
							</div>
							<div className="px-4 py-5 sm:p-6">
								<div className="mx-auto mt-2 mb-6 max-w-sm space-y-4">
									<PriceInput
										label="Price per month"
										name="priceMonth"
										type="number"
									/>
									<PriceInput
										label="Security deposit"
										name="securityDeposit"
										type="number"
										optional="Optional"
									/>
									<RadioGroupCheck
										label="Room type"
										name="roomType"
										items={[
											{
												id: 1,
												label: "Private",
												value: "Private",
											},
											{
												id: 2,
												label: "Shared",
												value: "Shared",
											},
										]}
									/>
									<CustomDatePicker
										label="Available from"
										name="availableFrom"
									/>
									<CustomDatePicker
										label="Available to"
										name="availableTo"
										optional="Optional"
									/>
									{/* furnished & utility bills */}
									<div className="space-y-2">
										<ToggleSwitch label="Furnished room?" name="furnished" />
										<ToggleSwitch
											label="Utility bills included?"
											name="utilityBills"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* FOURTH SECTION */}
						<div className="space-y-4">
							<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
								<div className="px-4 py-5 sm:px-6">
									<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
										Existing roommates
									</p>
								</div>
								<div className="px-4 py-5 sm:p-6">
									<div className="mx-auto mt-2 mb-6 max-w-sm space-y-6">
										{/* number of males and females */}
										<div className="flex items-center space-x-4">
											<TextInput
												label="Number of males"
												type="number"
												name="numberOfMales"
											/>
											<TextInput
												label="Number of females"
												type="number"
												name="numberOfFemales"
											/>
										</div>
										{/* existing smoker or pet owner */}
										<div>
											<p className="mb-2 block text-sm font-medium text-neutral-700">
												Do any of these apply to you / the existing roommate?
											</p>
											<div className="space-y-2">
												<ToggleSwitch label="Smoker" name="existingSmoker" />
												<ToggleSwitch
													label="Pet owner"
													name="existingPetOwner"
												/>
											</div>
										</div>
										<Interests />
									</div>
								</div>
							</div>
							<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
								<div className="flex items-center justify-between px-4 py-5 sm:px-6">
									<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
										New roommate
									</p>
									<p className="text-xs font-medium tracking-wide text-neutral-500">
										Optional
									</p>
								</div>
								<div className="px-4 py-5 sm:p-6">
									<div className="mx-auto mt-2 mb-6 max-w-sm space-y-6">
										<NewRoommate />
									</div>
								</div>
							</div>
						</div>

						{/* FIFTH SECTION */}
						<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
							<div className="px-4 py-5 sm:px-6">
								<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
									Listing details
								</p>
							</div>
							<div className="px-4 py-5 sm:p-6">
								<div className="mx-auto mt-2 mb-6 max-w-lg space-y-4">
									<TextInput
										label="Listing headline"
										name="listingHeadline"
										type="text"
										placeholder="Write an eye-catching headline."
									/>
									<TextArea
										label="Listing description"
										name="listingDescription"
										placeholder="Write more details about your accommodation."
									/>
								</div>
							</div>
						</div>

						{/* DISCARD AND SUBMIT */}
						<div className="flex items-center justify-between">
							<Link to="/my-rooms">
								<DiscardButton />
							</Link>
							<PrimaryButton
								type="submit"
								label={isLoading ? "Updating changes" : "Save changes"}
								disabled={isLoading}
							/>
						</div>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default UpdateRoomForm;
