export type TBook = {
	_id: string;
	title: string;
	coverImage: string;
	file: string;
	author: Author;
	genre: string;
	description: string;
};

export type Author = {
	_id: string;
	name: string;
};
