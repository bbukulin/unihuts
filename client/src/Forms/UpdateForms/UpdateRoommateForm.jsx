import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";

import Alert from "../../Components/Alerts/Alert";
import UpdateRoommateValidation from "./UpdateRoommateValidation";

import PhoneInput from "../../Components/Inputs/PhoneInput";
import TextInput from "../../Components/Inputs/TextInput";
import TextArea from "../../Components/Inputs/TextArea";
import PriceInput from "../../Components/Inputs/PriceInput";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import DiscardButton from "../../Components/Buttons/DiscardButton";
import ToggleSwitch from "../../Components/Buttons/ToggleSwitch";
import CustomDatePicker from "../../Components/DatePicker/CustomDatePicker";
import RadioGroupCheck from "../../Components/RadioGroups/RadioGroupCheck";

import Interests from "../RoomListing/Interests/Interests";
import Comfort from "../RoomListing/Amenities/Comfort";
import Appliances from "../RoomListing/Amenities/Appliances";
import NearbyLocations from "../RoomListing/Amenities/NearbyLocations";

function UpdateRoommateForm() {
	const navigate = useNavigate();
	const { editRoommate, showAlert, roommate, isLoading } = useAppContext();

	return (
		<div>
			{showAlert && (
				<div className="mx-auto max-w-xs py-2">
					<Alert />
				</div>
			)}
			<h1 className="ml-3 py-2 text-lg font-medium">Update roommate listing</h1>
			<Formik
				validationSchema={UpdateRoommateValidation}
				initialValues={{
					desiredRoomType: roommate.desiredRoomType,
					budget: roommate.budget,
					moveInDate: roommate.moveInDate,
					furnished: roommate.furnished,
					appliances: roommate.appliances,
					comfort: roommate.comfort,
					nearby: roommate.nearby,
					age: roommate.age,
					advertiserMail: roommate.advertiserMail,
					phoneNumber: roommate.phoneNumber,
					occupation: roommate.occupation,
					gender: roommate.gender,
					smoker: roommate.smoker,
					petOwner: roommate.petOwner,
					interests: roommate.interests,
					preferredGender: roommate.preferredGender,
					preferredOccupation: roommate.preferredOccupation,
					allowsSmoking: roommate.allowsSmoking,
					allowsPets: roommate.allowsPets,
					headline: roommate.headline,
					description: roommate.description,
				}}
				onSubmit={({
					desiredRoomType,
					budget,
					moveInDate,
					furnished,
					appliances,
					comfort,
					nearby,
					age,
					advertiserMail,
					phoneNumber,
					occupation,
					gender,
					smoker,
					petOwner,
					interests,
					preferredGender,
					preferredOccupation,
					allowsSmoking,
					allowsPets,
					headline,
					description,
				}) => {
					editRoommate({
						desiredRoomType,
						budget,
						moveInDate,
						furnished,
						appliances,
						comfort,
						nearby,
						age,
						advertiserMail,
						phoneNumber,
						occupation,
						gender,
						smoker,
						petOwner,
						interests,
						preferredGender,
						preferredOccupation,
						allowsSmoking,
						allowsPets,
						headline,
						description,
					});
					navigate("/my-roommates");
				}}>
				<Form>
					<div className="space-y-4">
						{/* FIRST STEP */}
						<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
							<div className="px-4 py-5 sm:px-6">
								<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
									General information
								</p>
							</div>
							<div className="px-4 py-5 sm:p-6">
								<div className="mx-auto  mt-2 mb-6 max-w-sm space-y-4">
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

						{/* SECOND STEP */}
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

						{/* THIRD STEP */}
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
										placeholder="98 908 4318"
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

						{/* FOURTH STEP */}
						<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
							<div className="px-4 py-5 sm:px-6">
								<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
									Preffered roommate
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

						{/* FIFTH STEP */}
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
								</div>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<Link to="/my-roommates">
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
}

export default UpdateRoommateForm;
