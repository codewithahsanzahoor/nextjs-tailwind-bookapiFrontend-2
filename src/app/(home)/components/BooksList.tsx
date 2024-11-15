import { TBook } from "@/types";
import Card from "./Card";

const BooksList = async () => {
	const url = `${process.env.BACKEND_BASE_URL}/books`;
	let books: { allBooks: TBook[] } | null = null;

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

		// console.log("Fetched books:", books);
	} catch (error) {
		// Handle network errors, HTTP errors, and JSON parsing errors
		throw new Error(
			"An error occurred while fetching books from the API:" + error
		);
	}

	if (!books) {
		throw new Error("Books not found");
	}

	return (
		<>
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-3">
				{books.allBooks.map((book) => (
					<Card key={book._id} book={book} />
				))}
			</div>
		</>
	);
};

export default BooksList;
