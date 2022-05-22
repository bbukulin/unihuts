import bathroom from "../../../Assets/Icons/Shared/bathroom.svg";
import kitchen from "../../../Assets/Icons/Shared/kitchen.svg";
import livingroom from "../../../Assets/Icons/Shared/livingroom.svg";

import CheckBoxIcon from "../../../Components/Buttons/CheckBoxIcon";

function SharedSpace() {
	return (
		<div className="mx-auto max-w-sm">
			<label
				htmlFor="sharedSpace"
				className="text-sm font-medium text-neutral-700">
				Shared spaces
			</label>
			<div className="mt-1 grid grid-cols-3 gap-x-8">
				<CheckBoxIcon
					name="sharedSpace"
					label="Bathroom"
					value="bathroom"
					icon={bathroom}
				/>
				<CheckBoxIcon
					name="sharedSpace"
					label="Kitchen"
					value="kitchen"
					icon={kitchen}
				/>
				<CheckBoxIcon
					name="sharedSpace"
					label="Living room"
					value="livingroom"
					icon={livingroom}
				/>
			</div>
		</div>
	);
}

export default SharedSpace;
