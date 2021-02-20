import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Image src="/TechNinja1.jpg" width={100} height={100}></Image>
			</div>
			<div className="links">
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/ninjas/">
					<a>Ninja Listing</a>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
