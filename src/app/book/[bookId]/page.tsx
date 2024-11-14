import { TBook } from "@/types";
import React from "react";

const SingleBookPage = async ({
	params,
}: {
	params: Promise<{ bookId: string }>;
}) => {
	// console.log("🚀 ~ params:", { params });
	const bookId = (await params).bookId;

	// console.log("🚀 ~ bookId:", bookId);
	let book: { book: TBook } | null = null;
	try {
		const response = await fetch(
			`${process.env.BACKEND_BASE_URL}/books/${bookId}`
		);
		if (!response.ok) throw new Error("Error fetching book data");
		book = await response.json();
		// console.log("🚀 ~ book:", book);
	} catch (error) {
		throw new Error("Error fetching book data: " + error);
	}

	if (!book) {
		throw new Error("Book not found");
	}

	return (
		<>
			<div className="container mx-auto p-4 max-w-7xl mx-auto">
				<div className="flex flex-wrap -mx-4">
					<div className="w-full md:w-1/2 xl:w-1/2 p-4 rounded dark:bg-slate-600 text-white ">
						<div className=" rounded shadow-md p-4">
							<h2 className="text-2xl font-bold mb-2">
								{book.book.title}
							</h2>
							<p className="text-lg font-medium mb-2">
								By {book.book.author.name}
							</p>
							<p className="">{book.book.description}</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 xl:w-1/2 rounded p-4">
						<div className="flex justify-center items-center  shadow-md p-4">
							<img
								src={book.book.coverImage}
								alt={book.book.file}
								style={{
									objectFit: "cover",
									width: "30%",
									height: "50%",
								}}
								className="rounded"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleBookPage;
