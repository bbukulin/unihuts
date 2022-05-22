import ac from "../../../Assets/Icons/Comfort/ac.svg";
import balcony from "../../../Assets/Icons/Comfort/balcony.svg";
import parking from "../../../Assets/Icons/Comfort/parking.svg";
import terrace from "../../../Assets/Icons/Comfort/terrace.svg";
import wifi from "../../../Assets/Icons/Comfort/wifi.svg";

import CheckBoxIcon from "../../../Components/Buttons/CheckBoxIcon";

function Comfort() {
	return (
		<div className="mx-auto max-w-sm">
			<label htmlFor="comfort" className="text-sm font-medium text-neutral-700">
				Comfort
			</label>
			<div className="mt-1 grid grid-cols-5 gap-x-8">
				<CheckBoxIcon
					name="comfort"
					label="Balcony"
					value="balcony"
					icon={balcony}
				/>
				<CheckBoxIcon
					name="comfort"
					label="Terrace"
					value="terrace"
					icon={terrace}
				/>
				<CheckBoxIcon
					name="comfort"
					label="Parking"
					value="parking"
					icon={parking}
				/>
				<CheckBoxIcon name="comfort" label="AC" value="ac" icon={ac} />
				<CheckBoxIcon name="comfort" label="Wi-Fi" value="wifi" icon={wifi} />
			</div>
		</div>
	);
}

export default Comfort;
