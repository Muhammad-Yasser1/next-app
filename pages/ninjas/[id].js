import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const getStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users/");
	const users = await res.json();

	const allPaths = users.map((user) => ({
		params: { id: user.id.toString() },
	}));

	return {
		paths: allPaths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/users/${context.params.id}`
	);
	const data = await res.json();
	return {
		props: {
			user: data,
		},
	};
};

const NinjaDetails = ({ user }) => {
	const router = useRouter();
	return (
		<div>
			<h1>Ninja Details</h1>
			<h2>{user.name}</h2>
			<p>{user.email}</p>
			<p>{user.username}</p>
			<p>{user.address.city}</p>
			<Link href={`/ninjas/${+router.query.id + 1}`}>
				<a
					style={{
						background: "#777",
						padding: "10px 20px",
						color: "#fff",
						fontWeight: "bold",
						display: "inline-block",
						margin: "30px auto",
					}}
				>
					Next
				</a>
			</Link>
		</div>
	);
};

export default NinjaDetails;
