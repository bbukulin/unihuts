import { useField } from "formik";

// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css";
// import "tippy.js/animations/shift-away.css";

// import { HiOutlineInformationCircle } from "react-icons/hi";

const PhoneInput = ({ label, note, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className="h-22">
			{meta.touched && meta.error ? (
				<div>
					<div className="flex items-center justify-between">
						<label
							htmlFor={props.id || props.name}
							className="block text-sm font-medium text-neutral-700">
							{label}
						</label>
						{/* <Tippy
							maxWidth={150}
							animation={"shift-away"}
							interactive={true}
							content={"Other users will be able to contact you this way."}>
							<HiOutlineInformationCircle className="h-5 w-5 text-neutral-300" />
						</Tippy> */}
					</div>
					<div className="mt-1 flex rounded-md">
						<span className="inline-flex items-center rounded-l-md border-2 border-r-0 border-error-200 bg-neutral-100 px-3 text-neutral-500 sm:text-sm">
							+385
						</span>
						<input
							{...field}
							{...props}
							className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-2 border-error-200 bg-neutral-50 px-3 py-2 text-neutral-800 shadow-sm transition duration-500 hover:border-error-400 hover:shadow-md focus:border-error-500 focus:outline-none focus:ring-error-500 sm:text-sm"
						/>
					</div>
					<p className="mt-1 text-sm font-medium text-error-600">
						{meta.error}
					</p>
				</div>
			) : (
				<div>
					<div className="flex items-center justify-between">
						<label
							htmlFor={props.id || props.name}
							className="block text-sm font-medium text-neutral-700">
							{label}
						</label>
						{/* <Tippy
							maxWidth={150}
							animation={"shift-away"}
							interactive={true}
							content={"Other users will be able to contact you this way."}>
							<HiOutlineInformationCircle className="h-5 w-5 text-neutral-300" />
						</Tippy> */}
					</div>
					<div className="mt-1 flex rounded-md">
						<span className="inline-flex items-center rounded-l-md border-2 border-r-0 border-neutral-200 bg-neutral-100 px-3 text-neutral-500 sm:text-sm">
							+385
						</span>
						<input
							{...field}
							{...props}
							className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-2 border-neutral-200 bg-neutral-50 px-3 py-2 text-neutral-800 placeholder-neutral-400 shadow-sm transition duration-500 hover:border-primary-400 hover:shadow-md focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default PhoneInput;
