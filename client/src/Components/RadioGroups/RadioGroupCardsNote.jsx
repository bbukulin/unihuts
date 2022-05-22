import { useField } from "formik";
import { RadioGroup } from "@headlessui/react";
import { HiCheckCircle } from "react-icons/hi";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function RadioGroupCardsNote({ label, ...props }) {
	const [field, meta, helpers] = useField(props);

	const handleChange = (newValue) => {
		helpers.setValue(newValue);
	};

	return (
		<div className="h-42 bg-white">
			<RadioGroup
				className="bg-white"
				value={field.value}
				onChange={handleChange}
				name={props.name}>
				<div className="bg-white">
					<RadioGroup.Label className="mb-1 text-sm font-medium text-neutral-700">
						{label}
					</RadioGroup.Label>
				</div>
				<div className="flex flex-col space-y-2 bg-white">
					{props.items.map((item) => (
						<RadioGroup.Option
							key={item.id}
							value={item.value}
							className={({ checked, active }) =>
								classNames(
									checked ? "border-primary-500" : "border-neutral-200",
									active ? "ring ring-primary-500" : "",
									"relative flex cursor-pointer rounded-md border bg-neutral-50 p-2 shadow-sm duration-300  hover:border-primary-400 hover:shadow-md"
								)
							}>
							{({ checked, active }) => (
								<>
									<div className="flex flex-1">
										<div className="flex flex-col">
											<RadioGroup.Label
												as="span"
												className="block text-sm font-medium text-neutral-700">
												{item.label}
											</RadioGroup.Label>
											<RadioGroup.Description
												as="span"
												className="block text-xs text-neutral-500">
												{item.description}
											</RadioGroup.Description>
										</div>
									</div>
									<HiCheckCircle
										className={classNames(
											checked
												? "h-5 w-5 text-primary-500"
												: "h-5 w-5 text-neutral-200"
										)}
									/>
									<div
										className={classNames(
											active ? "border" : "border-2",
											checked ? "border-primary-500" : "border-transparent",
											"pointer-events-none absolute -inset-px rounded-md"
										)}
										aria-hidden="true"
									/>
								</>
							)}
						</RadioGroup.Option>
					))}
				</div>
				{meta.touched && meta.error ? (
					<div className="bg-white">
						<p className="text-sm font-medium text-error-600">{meta.error}</p>
					</div>
				) : null}
			</RadioGroup>
		</div>
	);
}

export default RadioGroupCardsNote;
