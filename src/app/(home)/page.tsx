import Banner from "@/app/(home)/components/Banner";
import BooksList from "./components/BooksList";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default async function Home() {
	return (
		<div className="max-w-7xl mx-auto ">
			<Banner />
			<Suspense fallback={<Loading />}>
				<BooksList />
			</Suspense>
		</div>
	);
}
