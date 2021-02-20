import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const err = () => {
	const router = useRouter();
	const [secs, setSecs] = useState(5);
	const interv = setInterval(() => {
		setSecs(secs - 1);
	}, 1000);
	useEffect(() => {
		if (secs === 0) {
			router.push("/");
		}
		return () => {
			clearInterval(interv);
		};
	}, [secs]);

	return (
		<div style={{ textAlign: "center" }}>
			<h1>Page Wasn't Found</h1>
			<h3>You will be redirected after {secs}</h3>
			<Link href="/">
				<a>Return to home page</a>
			</Link>
		</div>
	);
};

export default err;
