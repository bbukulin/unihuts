import fridge from "../../../Assets/Icons/Appliances/fridge.svg";
import microwave from "../../../Assets/Icons/Appliances/microwave.svg";
import stove from "../../../Assets/Icons/Appliances/stove.svg";
import television from "../../../Assets/Icons/Appliances/television.svg";
import washingmachine from "../../../Assets/Icons/Appliances/washingmachine.svg";

import CheckBoxIcon from "../../../Components/Buttons/CheckBoxIcon";

function Appliances() {
	return (
		<div className="mx-auto max-w-sm">
			<label
				htmlFor="appliances"
				className="text-sm font-medium text-neutral-700">
				Appliances
			</label>

			<div className="mt-1 grid grid-cols-5 gap-x-8">
				<CheckBoxIcon
					name="appliances"
					label="Microwave"
					value="microwave"
					icon={microwave}
				/>
				<CheckBoxIcon
					name="appliances"
					label="Stove"
					value="stove"
					icon={stove}
				/>
				<CheckBoxIcon
					name="appliances"
					label="Television"
					value="television"
					icon={television}
				/>
				<CheckBoxIcon
					name="appliances"
					label="Washer"
					value="washer"
					icon={washingmachine}
				/>
				<CheckBoxIcon
					name="appliances"
					label="Fridge"
					value="fridge"
					icon={fridge}
				/>
			</div>
		</div>
	);
}

export default Appliances;
