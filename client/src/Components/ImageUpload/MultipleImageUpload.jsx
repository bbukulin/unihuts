import { useField } from "formik";
import ImageUploadError from "./ImageUploadError";
import SingleImageUpload from "./SingleImageUpload";
import { useCallback, useState, useEffect, useMemo } from "react";
import { useDropzone, FileRejection, FileError } from "react-dropzone";

let currentID = 0;

function getNewID() {
	return ++currentID;
}

const baseStyle = {
	flex: 1,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "20px",
	borderWidth: 2,
	borderRadius: 6,
	borderColor: "#CBD2D9",
	borderStyle: "dashed",
	backgroundColor: "#F5F7FA",
	color: "#9AA5B1",
	outline: "none",
	transition: "border .24s ease-in-out",
};

// const focusedStyle = {
// 	borderColor: "#2BB0ED",
// };

// const acceptStyle = {
// 	borderColor: "#1992D4",
// };

// const rejectStyle = {
// 	borderColor: "#F86A6A",
// };

function MultipleImageUpload({ name }) {
	const [field, meta, helpers] = useField(name);

	const [files, setFiles] = useState([]);

	const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
		const acceptedFile = acceptedFiles.map((file) => ({
			file,
			errors: [],
			id: getNewID(),
		}));
		const rejectedFile = rejectedFiles.map((r) => ({ ...r, id: getNewID() }));
		setFiles((current) => [...current, ...acceptedFile, ...rejectedFile]);
	}, []);

	useEffect(() => {
		helpers.setValue(files);
	}, [files]);

	const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
		useDropzone({
			onDrop,
			accept: "image/jpeg, image/jpg, image/png",
			maxSize: 10000 * 1024, //10 mb
			// FIXME: maxFiles: 10,
		});

	const style = useMemo(
		() => ({
			...baseStyle,
			// ...(isFocused ? focusedStyle : {}),
			// ...(isDragAccept ? acceptStyle : {}),
			// ...(isDragReject ? rejectStyle : {}),
		}),
		[]
		// isFocused, isDragAccept, isDragReject
	);

	function onDelete(file) {
		setFiles((current) => current.filter((fw) => fw.file !== file));
	}

	function onUpload(file, url) {
		setFiles((current) =>
			current.map((fw) => {
				if (fw.file === file) {
					return { ...fw, url };
				}
				return fw;
			})
		);
	}

	return (
		<>
			<div {...getRootProps({ style })}>
				<input {...getInputProps()} />
				<svg
					className="mx-auto h-10 w-10 text-gray-400"
					stroke="currentColor"
					fill="none"
					viewBox="0 0 48 48"
					aria-hidden="true">
					<path
						d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
						strokeWidth={2}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<p className="mt-2 text-xs">PNG, JPG & JPEG up to 10MB</p>
				<h4 className="mt-2 text-sm">
					Drag 'n' drop images here, or click to select
				</h4>
			</div>

			{files.map((fileWrapper) => (
				<div key={fileWrapper.id}>
					{fileWrapper.errors.length ? (
						<ImageUploadError
							onDelete={onDelete}
							file={fileWrapper.file}
							errors={fileWrapper.errors}
						/>
					) : (
						<SingleImageUpload
							onUpload={onUpload}
							onDelete={onDelete}
							file={fileWrapper.file}
						/>
					)}
				</div>
			))}
		</>
	);
}

export default MultipleImageUpload;
