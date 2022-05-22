import gym from "../../../Assets/Icons/Nearby/gym.svg";
import canteen from "../../../Assets/Icons/Nearby/canteen.svg";
import market from "../../../Assets/Icons/Nearby/market.svg";
import transport from "../../../Assets/Icons/Nearby/transport.svg";
import campus from "../../../Assets/Icons/Nearby/campus.svg";

import CheckBoxIcon from "../../../Components/Buttons/CheckBoxIcon";

function NearbyLocations() {
	return (
		<div className="mx-auto max-w-sm">
			<label htmlFor="nearby" className="text-sm font-medium text-neutral-700">
				Nearby locations
			</label>
			<div className="mt-1 grid grid-cols-5 gap-x-8">
				<CheckBoxIcon name="nearby" label="Gym" value="gym" icon={gym} />
				<CheckBoxIcon
					name="nearby"
					label="Canteen"
					value="canteen"
					icon={canteen}
				/>
				<CheckBoxIcon
					name="nearby"
					label="Market"
					value="market"
					icon={market}
				/>
				<CheckBoxIcon
					name="nearby"
					label="Transport"
					value="transport"
					icon={transport}
				/>
				<CheckBoxIcon
					name="nearby"
					label="Campus"
					value="campus"
					icon={campus}
				/>
			</div>
		</div>
	);
}

export default NearbyLocations;
