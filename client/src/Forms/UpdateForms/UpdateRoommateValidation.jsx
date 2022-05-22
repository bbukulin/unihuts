import * as Yup from "yup";

const UpdateRoommateValidation = Yup.object({
	desiredRoomType: Yup.string().required("Room type is required"),
	budget: Yup.number()
		.min(1, "Minimum is 1")
		.max(10000, "Maximum is 10000")
		.integer("Whole numbers only")
		.required("Budget is required"),
	moveInDate: Yup.date()
		.nullable()
		.required("Move in date is required.")
		.min(new Date(), "Please enter a future date."),
	age: Yup.number()
		.min(18, "Minimum is 18")
		.max(50, "Maximum is 50")
		.integer("Whole numbers only")
		.required("Specifying age is required"),
	phoneNumber: Yup.string()
		.max(10, "Maximum is 10")
		.required("Phone number is required")
		.matches(
			/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
			"Please enter a valid phone number"
		),
	headline: Yup.string()
		.test(
			"len",
			"Headline should be at least 10 characters long",
			function (value) {
				if (!value) {
					return false;
				}
				return value.length >= 10;
			}
		)
		.test(
			"len",
			"Headline shouldn't be longer than 50 characters",
			function (value) {
				if (!value) {
					return false;
				}
				return value.length < 50;
			}
		)
		.required("Headline is required"),
	description: Yup.string()
		.test("len", "Write at least 150 characters", function (value) {
			if (!value) {
				return false;
			}
			return value.length >= 150;
		})
		.test(
			"len",
			"Description shouldn't be longer than 300 characters",
			function (value) {
				if (!value) {
					return false;
				}
				return value.length < 300;
			}
		)
		.required("Description is required"),
	// images: Yup.array(Yup.object({ url: Yup.string().required() })),
});

export default UpdateRoommateValidation;
