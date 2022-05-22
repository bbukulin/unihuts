import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";

import InitialValues from "./InitialValues";
import FirstStep from "./ValidationSchema/FirstStep";
import SecondStep from "./ValidationSchema/SecondStep";

import Loader from "../../Components/Loaders/Loader";

import TextInput from "../../Components/Inputs/TextInput";
import CheckBox from "../../Components/Buttons/CheckBox";
import BackButton from "../../Components/Buttons/BackButton";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import BulletSteps from "../../Components/Steps/BulletSteps";
import RadioGroupCheck from "../../Components/RadioGroups/RadioGroupCheck";

import Alert from "../../Components/Alerts/Alert";

const RegisterForm = () => {
	const navigate = useNavigate();
	const { user, showAlert, registerUser } = useAppContext();

	useEffect(() => {
		if (user) {
			setTimeout(() => {
				navigate("/");
			}, 3000);
		}
	}, [user, navigate]);

	return (
		<>
			{showAlert && (
				<div className="py-2">
					<Alert />
				</div>
			)}
			<FormikStepper
				initialValues={InitialValues}
				onSubmit={(values) => {
					const currentUser = { ...values };
					registerUser(currentUser);
				}}>
				{/* FIRST STEP */}
				<FormikStep validationSchema={FirstStep} label="firstStep">
					<div className="space-y-6">
						<TextInput
							label="Email address"
							name="email"
							type="email"
							placeholder="example@mail.com"
						/>

						<TextInput label="Password" name="password" type="password" />

						<CheckBox name="tosButton">
							I agree to the{" "}
							<a
								href="https://www.termsandcondiitionssample.com/live.php?token=W4kqk9P2uSgOLAt22EK3s8HolGUaS4xe"
								target="_blank"
								rel="noopener noreferrer"
								className="font-medium text-primary-600 hover:text-primary-500">
								Terms of Service
							</a>
							.
						</CheckBox>
					</div>
				</FormikStep>

				{/* SECOND STEP */}
				<FormikStep validationSchema={SecondStep} label="secondStep">
					<div className="space-y-4">
						<TextInput
							label="First name"
							name="firstName"
							type="text"
							placeholder="Will"
						/>

						<TextInput
							label="Last name"
							name="lastName"
							type="text"
							placeholder="Smith"
						/>

						{/* Radio group za spol */}
						<div>
							<div className="mb-1 flex justify-between">
								<p className="text-sm font-medium text-neutral-700">Gender</p>
								<p className="text-xs font-medium text-neutral-400">Optional</p>
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
					</div>
				</FormikStep>
			</FormikStepper>
		</>
	);
};

export function FormikStep({ children }) {
	return <>{children}</>;
}

export function FormikStepper({ children, ...props }) {
	const childrenArray = React.Children.toArray(children);

	const [step, setStep] = useState(0);

	const currentChild = childrenArray[step];

	function isLastStep() {
		return step === childrenArray.length - 1;
	}

	return (
		<Formik
			{...props}
			validationSchema={currentChild.props.validationSchema}
			onSubmit={async (values, helpers) => {
				if (isLastStep()) {
					await props.onSubmit(values, helpers);
				} else {
					setStep((step) => step + 1);
					helpers.setTouched({});
				}
			}}>
			{({ isSubmitting }) => (
				<Form autoComplete="off">
					{currentChild}

					<div className="mt-8">
						<div className="mt-4 flex items-center justify-between">
							{step > 0 ? (
								<BackButton onClick={() => setStep((step) => step - 1)} />
							) : null}

							<BulletSteps childrenArray={childrenArray} step={step} />

							{isSubmitting ? (
								<Loader />
							) : (
								<PrimaryButton
									type="submit"
									label={isLastStep() ? "Register" : "Next step"}
								/>
							)}
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default RegisterForm;
