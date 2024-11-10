import Image from "next/image";

const Banner = () => {
	return (
		<div
			className="max-w-7xl mx-auto bg-no-repeat bg-center bg-cover h-60 rounded-md flex items-center justify-between px-10"
			style={{
				backgroundImage:
					"url('/images/painted-solid-concrete-wall-textured-background.jpg')",
			}}
		>
			<div className=" ">
				<div className="text-4xl font-bold max-w-2xl text-white font-geist-sans">
					Connect, Share and Trade Your Favorite Reads...
				</div>
			</div>
			<div className="">
				<Image
					src={"/images/210057001_10979002.png"}
					alt=""
					width={235}
					height={235}
				></Image>
			</div>
		</div>
	);
};

export default Banner;
