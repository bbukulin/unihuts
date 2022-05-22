import * as Yup from "yup";
const ValidationSchema = Yup.object({
	advertiserStatus: Yup.string().required("Your status is required"),
	advertiserMail: Yup.string()
		.email("Invalid email.")
		.required("Please enter your email."),
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
	// propertyCountry: Yup.string().required("Specifying city is required"),
	// propertyState: Yup.string().required("Specifying city is required"),
	// propertyCity: Yup.string().required("Specifying city is required"),
	propertyAddress: Yup.string().required(
		"Specifying property address is required"
	),
	priceMonth: Yup.number()
		.min(1, "Minimum is 1")
		.max(10000, "Maximum is 10000")
		.integer("Whole numbers only")
		.required("Monthly payment is required"),
	securityDeposit: Yup.number()
		.min(0, "Minimum is 0")
		.max(10000, "Maximum is 10000")
		.integer("Whole numbers only")
		.required("Security deposit is required"),
	roomType: Yup.string().required("Room type is required."),
	availableFrom: Yup.date()
		.nullable()
		.required("Available from date is required.")
		.min(new Date(), "Please enter a future date."),
	availableTo: Yup.date()
		.nullable()
		.min(new Date(), "Please enter a future date."),
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
	listingHeadline: Yup.string()
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
	listingDescription: Yup.string()
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
	// listingImages: Yup.array(Yup.object({ url: Yup.string().required() })),
});

export default ValidationSchema;
