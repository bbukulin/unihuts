import React from "react";
import { Formik, Form } from "formik";
import { useAppContext } from "../../Context/AppContext";

import Alert from "../../Components/Alerts/Alert";
import DisplayLoader from "../../Layouts/DisplayLoader";

import Select from "react-select";
import { Country, State, City } from "country-state-city";

// ! VALIDATION SCHEMA
import InitialValues from "./InitialValues";
import ValidationSchema from "./ValidationSchema";

import PhoneInput from "../../Components/Inputs/PhoneInput";
import TextInput from "../../Components/Inputs/TextInput";
import TextArea from "../../Components/Inputs/TextArea";
import PriceInput from "../../Components/Inputs/PriceInput";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import ToggleSwitch from "../../Components/Buttons/ToggleSwitch";
import CustomDatePicker from "../../Components/DatePicker/CustomDatePicker";
import RadioGroupCardsNote from "../../Components/RadioGroups/RadioGroupCardsNote";
import RadioGroupCheck from "../../Components/RadioGroups/RadioGroupCheck";
import MultipleImageUpload from "../../Components/ImageUpload/MultipleImageUpload";

import SharedSpace from "./Amenities/SharedSpace";
import Appliances from "./Amenities/Appliances";
import Comfort from "./Amenities/Comfort";
import NearbyLocations from "./Amenities/NearbyLocations";
import Interests from "./Interests/Interests";
import NewRoommate from "./NewRoommate/NewRoommate";

const RoomListingForm = () => {
	const { isLoading, listRoom, showAlert } = useAppContext();

	const countries = Country.getAllCountries();

	const updatedCountries = countries.map((country) => ({
		value: country.isoCode,
		label: country.name,
	}));

	const updatedStates = (countryCode) =>
		State.getStatesOfCountry(countryCode).map((state) => ({
			value: state.isoCode,
			label: state.name,
		}));

	const updatedCities = (countryCode, stateCode) =>
		City.getCitiesOfState(countryCode, stateCode).map((city) => ({
			value: city.name,
			label: city.name,
		}));

	// react-select custom style
	const customStyles = {
		control: (base, state) => ({
			...base,
			background: "#F5F7FA",
			borderRadius: state.isFocused ? "6px 6px 6px 6px" : 6,
			borderColor: state.isFocused ? "#2BB0ED" : "#CBD2D9",
			borderWidth: 2,
			boxShadow: state.isFocused ? null : null,
			"&:hover": {
				borderColor: state.isFocused ? "#2BB0ED" : "#40C3F7",
			},
		}),
		menu: (base) => ({
			...base,
			borderRadius: 6,
			hyphens: "auto",
			wordWrap: "break-word",
		}),
		menuList: (base) => ({
			...base,
		}),
		singleValue: (provided, state) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			const transition = "opacity 300ms";

			return { ...provided, opacity, transition };
		},
	};

	if (isLoading) {
		return <DisplayLoader />;
	}

	return (
		<>
			{showAlert && (
				<div className="mx-auto max-w-xs py-2">
					<Alert />
				</div>
			)}
			<h1 className="ml-3 py-4 text-lg font-medium">Create new room listing</h1>

			<Formik
				initialValues={InitialValues}
				validationSchema={ValidationSchema}
				onSubmit={async (values) => {
					const currentRoom = { ...values };
					await listRoom(currentRoom);
				}}>
				{({ values, setFieldValue }) => (
					<Form className="space-y-4">
						{/* FIRST SECTION */}
						<div className="space-y-4">
							<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
								<div className="px-4 py-5 sm:px-6">
									<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
										General information
									</p>
								</div>
								<div className="px-4 py-5 sm:p-6">
									<div className="mx-auto mt-2 mb-6 max-w-sm space-y-2">
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
									<div className="mx-auto mt-2 mb-6 max-w-sm space-y-2">
										<div className="h-22">
											<label
												htmlFor="propertyCountry"
												className="text-sm font-medium text-neutral-700">
												Country
											</label>
											<Select
												className="mt-1"
												placeholder="----- Select -----"
												menuPortalTarget={document.querySelector("body")}
												styles={customStyles}
												id="propertyCountry"
												name="propertyCountry"
												label="propertyCountry"
												options={updatedCountries}
												value={values.propertyCountry}
												onChange={(value) =>
													setFieldValue("propertyCountry", value)
												}
											/>
										</div>

										<div className="h-22">
											<label
												htmlFor="propertyState"
												className="text-sm font-medium text-neutral-700">
												State
											</label>
											<Select
												className="mt-1"
												placeholder="----- Select -----"
												menuPortalTarget={document.querySelector("body")}
												styles={customStyles}
												id="propertyState"
												name="propertyState"
												options={updatedStates(values.propertyCountry.value)}
												value={values.propertyState}
												onChange={(value) =>
													setFieldValue("propertyState", value)
												}
											/>
										</div>

										<div className="h-22">
											<div className="flex items-center justify-between">
												<label
													htmlFor="propertyCity"
													className="text-sm font-medium text-neutral-700">
													City
												</label>
												<p className="text-xs font-medium tracking-wide text-neutral-500">
													Optional
												</p>
											</div>
											<Select
												className="mt-1"
												placeholder="----- Select -----"
												menuPortalTarget={document.querySelector("body")}
												styles={customStyles}
												id="propertyCity"
												name="propertyCity"
												options={updatedCities(
													values.propertyCountry.value,
													values.propertyState.value
												)}
												value={values.propertyCity}
												onChange={(value) =>
													setFieldValue("propertyCity", value)
												}
											/>
										</div>

										<TextInput
											label="Address"
											type="text"
											name="propertyAddress"
										/>
									</div>
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
								<div className="mx-auto mt-2 mb-6 max-w-sm space-y-2">
									<PriceInput
										label="Price per month"
										name="priceMonth"
										type="number"
									/>
									<PriceInput
										label="Security deposit"
										name="securityDeposit"
										type="number"
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
									<div>
										<div>
											<label
												htmlFor="listingImages"
												className="mb-1 block text-sm font-medium text-neutral-700">
												Listing images
											</label>

											<MultipleImageUpload name="listingImages" />
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* SUBMIT BUTTON */}
						<div className="flex items-center justify-end">
							<PrimaryButton type="submit" label="Submit" />
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default RoomListingForm;
