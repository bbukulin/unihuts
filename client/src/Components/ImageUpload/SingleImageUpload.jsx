import { useEffect, useState } from "react";
import ImageHeader from "./ImageHeader";
import { styled } from "@mui/material/styles";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";

function SingleImageUpload({ file, onDelete, onUpload }) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		async function upload() {
			const url = await uploadFile(file, setProgress);
			onUpload(file, url);
		}

		upload();
	}, []);

	const DefaultLinearProgress = styled(LinearProgress)(({ theme }) => ({
		height: 4,
		borderRadius: 1,
		animationDuration: "8s",
		[`&.${linearProgressClasses.colorPrimary}`]: {
			backgroundColor: "#E4E7EB",
		},
		[`& .${linearProgressClasses.bar}`]: {
			borderRadius: 1,
			backgroundColor: "#1992D4",
		},
	}));

	return (
		<div>
			<ImageHeader file={file} onDelete={onDelete} />
			<DefaultLinearProgress variant="determinate" value={progress} />
		</div>
	);
}

export default SingleImageUpload;

function uploadFile(file, onProgress) {
	const url = "https://api.cloudinary.com/v1_1/dgirwpdns/image/upload";
	const key = "alvilrzb";

	return new Promise((res, rej) => {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", url);

		xhr.onload = () => {
			const resp = JSON.parse(xhr.responseText);
			res(resp.secure_url);
		};

		xhr.onerror = (evt) => rej(evt);

		xhr.upload.onprogress = (event) => {
			if (event.lengthComputable) {
				const percentage = (event.loaded / event.total) * 100;
				onProgress(Math.round(percentage));
			}
		};

		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", key);

		xhr.send(formData);
	});
}
