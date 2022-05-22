import * as Yup from "yup";

const FirstStep = Yup.object({
	email: Yup.string()
		.email("Invalid email.")
		.required("Please enter your email."),
	password: Yup.string()
		.required("Please create a password.")
		.matches(
			// eslint-disable-next-line
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			"Include at least 8 characters, one uppercase, one lowercase, one number and one special case character."
		),
	tosButton: Yup.boolean()
		.required("Required")
		.oneOf([true], "This field is required."),
});

export default FirstStep;
