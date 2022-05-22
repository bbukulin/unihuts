import * as Yup from "yup";

const ThirdStep = Yup.object({
	age: Yup.number()
		.min(18, "Minimum is 18")
		.max(50, "Maximum is 50")
		.integer("Whole numbers only")
		.required("Specifying age is required")
		.typeError("You must specify a number"),
	phoneNumber: Yup.string()
		.max(10, "Maximum is 10")
		.required("Phone number is required")
		.typeError("You must specify a number")
		.matches(
			/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
			"Please enter a valid phone number"
		),
});

export default ThirdStep;
