import { URL } from "../utils/shopifyApiEndpoint";
import gql from "../graphql/queries";

const { allProductsQuery, productQuery } = gql;

function Client() {
	// Fetch all products
	this.fetchAllProducts = async () => {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-Shopify-Storefront-Access-Token":
					process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
			},
			body: JSON.stringify({ query: allProductsQuery }),
		};

		const res = await fetch(URL, options);
		const {
			data: {
				products: { edges },
			},
		} = await res.json();
		return edges;
	};

	this.fetchSingleProduct = async (id: string) => {
		const params = {
			query: productQuery,
			variables: { id },
		};

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"X-Shopify-Storefront-Access-Token":
					process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
			},
			body: JSON.stringify(params),
		};

		const response = await fetch(URL, options);
		const { data } = await response.json();
		return data;
	};

	this.createCheckout = async () => {
		// TODO
	};

	this.addLineItems = async () => {
		// TODO
	};
}

export default new Client();

// Fetch all products
// export async function fetchAllProducts() {
// 	const options = {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 			"X-Shopify-Storefront-Access-Token":
// 				process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
// 		},
// 		body: JSON.stringify({ query: allProductsQuery }),
// 	};

// 	const res = await fetch(URL, options);
// 	const {
// 		data: {
// 			products: { edges },
// 		},
// 	} = await res.json();
// 	return edges;
// }

// // Fetch a single product
// export async function fetchSingleProduct(id: string) {
// 	const params = {
// 		query: productQuery,
// 		variables: { id },
// 	};

// 	const options = {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 			Accept: "application/json",
// 			"X-Shopify-Storefront-Access-Token":
// 				process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
// 		},
// 		body: JSON.stringify(params),
// 	};

// 	const response = await fetch(URL, options);
// 	const { data } = await response.json();
// 	return data;
// }

// export async function createCheckout() {
// 	// Create a checkout
// }

// export async function addLineItems() {
// 	// Add Line Items
// }
