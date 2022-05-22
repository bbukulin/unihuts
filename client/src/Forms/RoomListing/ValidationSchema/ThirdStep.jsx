import * as Yup from "yup";

const ThirdStep = Yup.object({
	priceMonth: Yup.number()
		.min(1, "Minimum is 1")
		.max(3000, "Maximum is 3000")
		.integer("Whole numbers only")
		.required("Monthly payment is required")
		.typeError("You must specify a number"),
	securityDeposit: Yup.number()
		.min(1, "Minimum is 1")
		.max(3000, "Maximum is 3000")
		.integer("Whole numbers only")
		.typeError("You must specify a number"),
	roomType: Yup.string().required("Room type is required."),
	availableFrom: Yup.date()
		.nullable()
		.required("Available from date is required.")
		.min(new Date(), "Please enter a future date."),
});

export default ThirdStep;
