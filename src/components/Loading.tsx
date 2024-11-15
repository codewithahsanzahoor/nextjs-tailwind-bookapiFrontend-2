import React from "react";

const Loading = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
			<span className="ml-2 text-gray-900">Loading please wait...</span>
		</div>
	);
};

export default Loading;
