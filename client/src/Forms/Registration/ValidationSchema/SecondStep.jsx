import * as Yup from "yup";

const SecondStep = Yup.object({
	firstName: Yup.string().required("Provide your first name."),
	lastName: Yup.string().required("Provide your last name."),
});

export default SecondStep;
