import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users/");
	const data = await res.json();
	return {
		props: {
			ninjas: data,
		},
	};
};

const Ninjas = ({ ninjas }) => {
	return (
		<div>
			<h1>All Ninjas</h1>
			{ninjas.map((ninja) => (
				<div key={ninja.id} className={styles.single}>
					<Link href={`/ninjas/${ninja.id}`}>
						<a>{ninja.name}</a>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Ninjas;
