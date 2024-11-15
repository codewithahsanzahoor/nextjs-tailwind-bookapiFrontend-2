import { TBook } from "@/types";
import Card from "./Card";
type TBookMain = {
	allBooks: TBook[];
};
// type TProps = {
// 	books: TBookMain;
// };

// props{product} props object ki andar books pass huwa ha as a prop => after destructuring => {books} => y shape ha object ki {books: TBookMain}
const BooksList = ({ books }: { books: TBookMain }) => {
	// console.log("🚀 ~ BooksList ~ books:", books.allBooks);
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
