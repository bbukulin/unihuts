import ImageHeader from "./ImageHeader";
import { styled } from "@mui/material/styles";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";

const ErrorLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 4,
	borderRadius: 1,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: "#616E7C",
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 1,
		backgroundColor: "#F86A6A",
	},
}));

function ImageUploadError({ file, onDelete, errors }) {
	return (
		<>
			<ImageHeader file={file} onDelete={onDelete} />
			<ErrorLinearProgress variant="determinate" value={100} />
			{errors.map((error) => (
				<div key={error.code}>
					<span className="mt-1 text-sm font-medium text-error-600">
						{" "}
						{error.message}{" "}
					</span>
				</div>
			))}
		</>
	);
}

export default ImageUploadError;
