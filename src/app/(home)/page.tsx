import Banner from "@/app/(home)/components/Banner";
import BooksList from "./components/BooksList";

export default async function Home() {
	const url = `${process.env.BACKEND_BASE_URL}/api/books`;
	let books;

	// console.log("🚀 ~ Home ~ url:", url);
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	try {
		const response = await fetch(url, options);

		// Check if the HTTP status indicates a failure
		if (!response.ok) {
			// Log the HTTP status and status text for more clarity
			throw new Error(
				`HTTP error! Status: ${response.status} - ${response.statusText}`
			);
		}

		// Try parsing the response to JSON
		try {
			books = await response.json();
		} catch (parseError) {
			// Handle JSON parsing errors
			throw new Error(
				"Failed to parse response as JSON. Details: " + parseError
			);
		}

		console.log("Fetched books:", books);
	} catch (error) {
		// Handle network errors, HTTP errors, and JSON parsing errors
		throw new Error(
			"An error occurred while fetching books from the API:" + error
		);
	}

	return (
		<div className="max-w-7xl mx-auto ">
			<Banner />
			<BooksList books={books} />
		</div>
	);
}
