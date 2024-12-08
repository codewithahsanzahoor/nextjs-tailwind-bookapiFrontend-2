"use client"; // Ensure this is at the top

import { TBook } from "@/types";
import Card from "./Card";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

const BooksList = () => {
	const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/books`;
	// console.log("🚀 ~ url:", url);
	// const url = "http://localhost:3000/api/books"; // Ensure this is correct

	const [books, setBooks] = useState<TBook[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				console.log("Fetched books:", data);
				setBooks(data);
			} catch (error) {
				console.error("Error fetching books:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchBooks();
	}, []); // Empty dependency array to run only once

	if (loading) return <Loading />; // Show loading state

	if (books.length === 0) {
		return <div>No books found.</div>; // Handle case where no books are returned
	}

	return (
		<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-3">
			{books.map((book) => (
				<Card key={book._id} book={book} />
			))}
		</div>
	);
};

export default BooksList;
