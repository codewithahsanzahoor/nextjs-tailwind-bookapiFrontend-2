"use client";
import React from "react";

const DownloadBtn = ({ file }: { file: string }) => {
	return (
		<button
			onClick={() => window.open(file, "_blank")}
			className="bg-primary-400 text-gray-900 font-bold py-2 px-4 rounded hover:bg-primary-600 mt-2 mx-2"
		>
			Download
		</button>
	);
};

export default DownloadBtn;
