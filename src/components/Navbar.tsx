import Image from "next/image";

const Navbar = () => {
	return (
		<>
			<nav className="border-b-2 border-gray-200 mx-auto py-3 mb-5">
				<div className="max-w-7xl mx-auto flex items-center justify-between">
					<Image
						src={"/images/rb_2149244760.png"}
						alt=""
						width={50}
						height={50}
					></Image>

					<div className="flex items-center gap-2">
						<button className="font-semibold border-primary-300 border-2 rounded-md py-2 px-3 hover:bg-primary-400 hover:text-white ">
							Login
						</button>
						<button className="text-white font-semibold border-primary-300 border-2 rounded-md py-2 px-3 bg-primary-200 hover:bg-primary-400 ">
							SignUp
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
