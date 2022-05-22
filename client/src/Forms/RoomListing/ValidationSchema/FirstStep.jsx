import * as Yup from "yup";

const FirstStep = Yup.object({
	advertiserStatus: Yup.string().required("Your status is required"),
	advertiserPhone: Yup.string()
		.max(10, "Maximum is 10")
		.required("Phone number is required")
		.typeError("You must specify a number")
		.matches(
			/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
			"Please enter a valid phone number"
		),
	propertyType: Yup.string().required("Property type is required"),
	totalRooms: Yup.number()
		.required("Required")
		.min(1, "Minimum is 1")
		.max(10, "Maximum is 10")
		.positive("No negatives")
		.integer("No decimals"),
	totalBathrooms: Yup.number()
		.required("Required")
		.min(1, "Minimum is 1")
		.max(10, "Maximum is 10")
		.positive("No negatives")
		.integer("No decimals"),
	totalArea: Yup.number()
		.required("Required")
		.min(1, "Minimum is 1")
		.max(300, "Maximum is 300")
		.positive("No negatives")
		.integer("No decimals"),
	propertyCountry: Yup.string().required("Specifying city is required"),
	propertyState: Yup.string().required("Specifying city is required"),
	propertyCity: Yup.string().required("Specifying city is required"),
	propertyAddress: Yup.string().required(
		"Specifying property address is required"
	),
});

export default FirstStep;
