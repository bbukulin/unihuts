import * as Yup from "yup";

const FourthStep = Yup.object({
	numberOfMales: Yup.number()
		.required("Required")
		.min(0, "Minimum is 0")
		.max(10, "Maximum is 10")
		.integer("Whole numbers only"),
	numberOfFemales: Yup.number()
		.required("Required")
		.min(0, "Minimum is 0")
		.max(10, "Maximum is 10")
		.integer("Whole numbers only"),
});

export default FourthStep;
