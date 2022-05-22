import { Formik, Form } from "formik";
import LoginSchema from "./LoginSchema";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";

import TextInput from "../../Components/Inputs/TextInput";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";

import Alert from "../../Components/Alerts/Alert";

const LoginForm = () => {
	const navigate = useNavigate();
	const { user, showAlert, loginUser } = useAppContext();

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
			<Formik
				initialValues={{
					email: "",
					password: "",
					rememberMe: false,
				}}
				validationSchema={LoginSchema}
				onSubmit={(values) => {
					const currentUser = { ...values };
					loginUser(currentUser);
				}}>
				<Form>
					<div className="space-y-4">
						<TextInput
							label="Email address"
							name="email"
							type="email"
							placeholder="example@gmail.com"
						/>

						<TextInput label="Password" name="password" type="password" />
					</div>
					<div className="mt-6 flex items-center justify-between">
						<p className="text-sm font-medium ">
							Lost password?{" "}
							<Link
								to="#"
								className="font-medium text-primary-700
                                hover:text-primary-500
                                ">
								Reset it
							</Link>
							.
						</p>
						<PrimaryButton type="submit" label="Login" />
					</div>
				</Form>
			</Formik>
		</>
	);
};

export default LoginForm;
