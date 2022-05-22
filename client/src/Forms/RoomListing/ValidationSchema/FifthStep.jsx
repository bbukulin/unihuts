import * as Yup from "yup";

const FifthStep = Yup.object({
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

export default FifthStep;
