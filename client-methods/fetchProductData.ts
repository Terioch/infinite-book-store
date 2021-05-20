import { STOREFRONT_URL } from "../utils/shopifyApiEndpoint";
import gql from "../graphql/queries";

const { allProductsQuery, productQuery } = gql;

function Product() {
	// Fetch all products
	this.fetchAll = async () => {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/graphql",
				"X-Shopify-Storefront-Access-Token":
					process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
			},
			body: allProductsQuery,
		};

		const res = await fetch(STOREFRONT_URL, options);
		const {
			data: {
				products: { edges },
			},
		} = await res.json();
		return edges;
	};

	// Fetch a single product
	this.fetchOne = async (id: string) => {
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

		const response = await fetch(STOREFRONT_URL, options);
		const { data } = await response.json();
		return data;
	};

	this.createCheckout = async () => {
		// Create a checkout
	};

	this.addLineItems = async () => {
		// Add line items
	};
}

export default new Product();
