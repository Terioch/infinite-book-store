import { useEffect } from "react";
import client from "../shared-functions/fetchProductData";
import Components from "../components/Components";
import styles from "../styles/Home.module.css";

export default function Home({ products }) {
	const { Shop } = Components;

	useEffect(() => {
		document.querySelector("body").classList.add(styles.body);
	});

	return <Shop products={products} />;
}

export async function getStaticProps() {
	try {
		const products = await client.fetchAllProducts();

		return {
			props: {
				products: JSON.parse(JSON.stringify(products)),
			},
		};
	} catch (err) {
		console.error(err.message);
	}
}
