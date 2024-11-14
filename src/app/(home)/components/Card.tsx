import { TBook } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ book }: { book: TBook }) => {
	return (
		<>
			<article className="flex dark:bg-gray-800 text-white bg-gray-300 transition hover:shadow-xl rounded">
				<div className="hidden sm:block sm:basis-56">
					<Image
						alt=""
						src={book.coverImage}
						className="rounded"
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: "auto", height: "12rem" }}
					/>
				</div>

				<div className="flex flex-1 md:flex-none flex-col justify-between">
					<div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
						<Link href="#">
							<h3 className="font-bold uppercase text-white">
								{book.title.split(" ").slice(0, 3).join(" ")}
							</h3>
						</Link>

						<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-300">
							{book.genre}
						</p>
					</div>

					<div className="sm:flex sm:items-end sm:justify-end">
						<Link
							href={`/book/${book._id}`}
							className="rounded block bg-primary-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-primary-600"
						>
							Read More
						</Link>
					</div>
				</div>
			</article>
		</>
	);
};

export default Card;
