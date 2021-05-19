import { useEffect } from "react";
import { client as Client } from "../utils/shopify";
import client from "../shared-functions/fetchProductData";
import Components from "../components/Components";
import styles from "../styles/Home.module.css";

export default function Home({ products }) {
	const { Shop } = Components;
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
