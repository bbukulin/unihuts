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
import RadioGroupCheck from "../../Components/RadioGroups/RadioGroupCheck";
import MultipleImageUpload from "../../Components/ImageUpload/MultipleImageUpload";

import Interests from "./Interests/Interests";
import Comfort from "./Amenities/Comfort";
import Appliances from "./Amenities/Appliances";
import NearbyLocations from "./Amenities/NearbyLocations";

const RoommateListingForm = () => {
	const { isLoading, listRoommate, showAlert } = useAppContext();

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
			// match with the menu
			borderRadius: state.isFocused ? "6px 6px 6px 6px" : 6,
			// Overwrittes the different states of border
			borderColor: state.isFocused ? "#2BB0ED" : "#CBD2D9",
			// border width
			borderWidth: 2,
			// Removes weird border around container
			boxShadow: state.isFocused ? null : null,
			"&:hover": {
				// Overwrittes the different states of border
				borderColor: state.isFocused ? "#2BB0ED" : "#40C3F7",
			},
		}),
		menu: (base) => ({
			...base,
			// override border radius to match the box
			borderRadius: 6,
			// beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
			hyphens: "auto",
			// prevent menu to scroll y
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
			<h1 className="ml-3 py-4 text-lg font-medium">
				Create new roommate listing
			</h1>
			<Formik
				initialValues={InitialValues}
				validationSchema={ValidationSchema}
				onSubmit={async (values) => {
					// console.log(values);
					const currentRoommate = { ...values };
					await listRoommate(currentRoommate);
				}}>
				{({ values, setFieldValue }) => (
					<Form className="space-y-4">
						{/* FIRST SECTION */}
						<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
							<div className="px-4 py-5 sm:px-6">
								<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
									General information
								</p>
							</div>
							<div className="px-4 py-5 sm:p-6">
								<div className="mx-auto  mt-2 mb-6 max-w-sm space-y-2">
									<RadioGroupCheck
										label="Desired room type"
										name="desiredRoomType"
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

									<div className="h-22">
										<label
											htmlFor="desiredCountry"
											className="text-sm font-medium text-neutral-700">
											Desired country
										</label>
										<Select
											className="mt-1"
											placeholder="----- Select -----"
											menuPortalTarget={document.querySelector("body")}
											styles={customStyles}
											id="desiredCountry"
											name="desiredCountry"
											label="desiredCountry"
											options={updatedCountries}
											value={values.desiredCountry}
											onChange={(value) =>
												setFieldValue("desiredCountry", value)
											}
										/>
									</div>

									<div className="h-22">
										<label
											htmlFor="desiredState"
											className="text-sm font-medium text-neutral-700">
											Desired state
										</label>
										<Select
											className="mt-1"
											placeholder="----- Select -----"
											menuPortalTarget={document.querySelector("body")}
											styles={customStyles}
											id="desiredState"
											name="desiredState"
											options={updatedStates(values.desiredCountry.value)}
											value={values.desiredState}
											onChange={(value) => setFieldValue("desiredState", value)}
										/>
									</div>

									<div className="h-22">
										<div className="flex items-center justify-between">
											<label
												htmlFor="desiredCity"
												className="text-sm font-medium text-neutral-700">
												Desired city
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
											id="desiredCity"
											name="desiredCity"
											options={updatedCities(
												values.desiredCountry.value,
												values.desiredState.value
											)}
											value={values.desiredCity}
											onChange={(value) => setFieldValue("desiredCity", value)}
										/>
									</div>

									<PriceInput
										label="Monthly budget"
										name="budget"
										type="number"
									/>
									<CustomDatePicker
										label="Available to move in from"
										name="moveInDate"
									/>
									<ToggleSwitch
										label="I'm looking for a furnished room"
										name="furnished"
									/>
								</div>
							</div>
						</div>

						{/* SECOND SECTION */}
						<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
							<div className="px-4 py-5 sm:px-6">
								<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
									Desired property characteristics
								</p>
							</div>
							<div className="px-4 py-5 sm:p-6">
								<div className="mx-auto mt-2 mb-6 space-y-8">
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
									About you
								</p>
							</div>
							<div className="px-4 py-5 sm:p-6">
								<div className="mx-auto  mt-2 mb-6 max-w-sm space-y-2">
									<TextInput label="Age" type="number" name="age" />

									<TextInput
										label="Your email address"
										type="email"
										name="advertiserMail"
									/>

									<PhoneInput
										label="Phone number"
										type="number"
										name="phoneNumber"
										placeholder="91 911 1234"
									/>
									<RadioGroupCheck
										label="Occupation"
										name="occupation"
										items={[
											{
												id: 1,
												label: "Student",
												value: "Student",
											},
											{
												id: 2,
												label: "Employed",
												value: "Employed",
											},
											{
												id: 3,
												label: "Other",
												value: "Other",
											},
										]}
									/>
									<RadioGroupCheck
										label="Gender"
										name="gender"
										items={[
											{
												id: 1,
												label: "Male",
												value: "Male",
											},
											{
												id: 2,
												label: "Female",
												value: "Female",
											},
											{
												id: 3,
												label: "Other",
												value: "Other",
											},
										]}
									/>
									<div className="space-y-4">
										<Interests />
										<div className="space-y-2">
											<ToggleSwitch label="Smoker" name="smoker" />
											<ToggleSwitch label="Pet owner" name="petOwner" />
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* FOURTH SECTION */}
						<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
							<div className="px-4 py-5 sm:px-6">
								<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
									Preferred roommate
								</p>
							</div>
							<div className="px-4 py-5 sm:p-6">
								<div className="mx-auto mb-6 mt-2 max-w-sm space-y-4">
									<RadioGroupCheck
										label="Gender"
										name="preferredGender"
										items={[
											{
												id: 1,
												label: "Male",
												value: "Male",
											},
											{
												id: 2,
												label: "Female",
												value: "Female",
											},
											{
												id: 3,
												label: "Anyone",
												value: "Anyone",
											},
										]}
									/>
									<RadioGroupCheck
										label="Occupation"
										name="preferredOccupation"
										items={[
											{
												id: 1,
												label: "Student",
												value: "Student",
											},
											{
												id: 2,
												label: "Employed",
												value: "Employed",
											},
											{
												id: 3,
												label: "Other",
												value: "Other",
											},
										]}
									/>
									<div className="space-y-2">
										<ToggleSwitch
											label="Allows smoking?"
											name="allowsSmoking"
										/>
										<ToggleSwitch
											label="Allows pets on property?"
											name="allowsPets"
										/>
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
										label="Headline"
										name="headline"
										type="text"
										placeholder="Write an eye-catching headline."
									/>
									<TextArea
										label="Description"
										name="description"
										placeholder="Write more details about yourself."
									/>
									<div>
										<label
											htmlFor="images"
											className="mb-1 block text-sm font-medium text-neutral-700">
											Images
										</label>
										<div className="flex flex-col space-y-4">
											<MultipleImageUpload name="images" />
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

export default RoommateListingForm;
