import Footer from "../Footer";
import Navbar from "../Navbar";
import Head from "next/head";
const MainLayout = ({ children }) => {
	return (
		<div className="content">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default MainLayout;
