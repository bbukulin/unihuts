import { Formik, Form } from "formik";
import Alert from "../../Components/Alerts/Alert";
import { useAppContext } from "../../Context/AppContext";

import TextInput from "../../Components/Inputs/TextInput";
import RadioGroupCheck from "../../Components/RadioGroups/RadioGroupCheck";

function UpdateSettingsForm() {
	const { user, showAlert, displayAlert, updateUser, isLoading } =
		useAppContext();

	return (
		<div className="space-y-4">
			<div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white bg-opacity-90 shadow">
				<div className="px-4 py-5 sm:px-6">
					<p className="text-md font-medium uppercase tracking-wide text-neutral-900">
						Personal information
					</p>
				</div>
				<div className="px-4 py-5 sm:p-6">
					<div className="mx-auto mt-2 mb-6 max-w-sm space-y-4">
						{showAlert && (
							<div className="py-2">
								<Alert />
							</div>
						)}
						<Formik
							initialValues={{
								email: user.email,
								firstName: user.firstName,
								lastName: user.lastName,
								userGender: user.userGender,
							}}
							onSubmit={({ email, firstName, lastName, userGender }) => {
								if (!email || !firstName || !lastName) {
									displayAlert();
									return;
								}

								updateUser({ email, firstName, lastName, userGender });
							}}>
							<Form>
								<TextInput label="Email address" name="email" type="email" />

								<TextInput label="First name" name="firstName" type="text" />

								<TextInput label="Last name" name="lastName" type="text" />

								<div>
									<div className="mb-1 flex justify-between">
										<p className="text-sm font-medium text-neutral-700">
											Gender
										</p>
										<p className="text-xs font-medium text-neutral-400">
											Optional
										</p>
									</div>
									<RadioGroupCheck
										name="userGender"
										items={[
											{ id: 1, label: "Male", value: "male" },
											{
												id: 2,
												label: "Female",
												value: "female",
											},
											{ id: 3, label: "Other", value: "other" },
										]}
									/>
								</div>

								<button
									type="submit"
									disabled={isLoading}
									className="inline-flex w-full items-center justify-center rounded-md border-2 border-primary-500 bg-primary-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition duration-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-800 focus:ring-offset-2">
									{isLoading ? "Updating..." : "Save"}
								</button>
							</Form>
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UpdateSettingsForm;
