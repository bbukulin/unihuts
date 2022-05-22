import * as Yup from "yup";

const FirstStep = Yup.object({
	desiredRoomType: Yup.string().required("Room type is required"),
	desiredCity: Yup.string().required("Specifying city is required"),
	desiredHood: Yup.string().required("Specifying neighborhood is required"),
	budget: Yup.number()
		.min(1, "Minimum is 1")
		.max(3000, "Maximum is 3000")
		.integer("Whole numbers only")
		.required("Budget is required")
		.typeError("You must specify a number"),
	moveInDate: Yup.date()
		.nullable()
		.required("Move in date is required.")
		.min(new Date(), "Please enter a future date."),
});

export default FirstStep;
