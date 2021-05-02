const { gql } = require("graphql-request");
// import { gql } from "graphql-request";

// Initialize GraphQL query data
const allProductsQuery = gql`
	query Products {
		products(first: 10) {
			edges {
				node {
					id
					title
					description
					images(first: 4) {
						edges {
							node {
								id
								src
							}
						}
					}
					variants(first: 1) {
						edges {
							node {
								id
								price
							}
						}
					}
				}
			}
		}
	}
`;

const productQuery = gql`
	query Product($id: ID!) {
		node(id: $id) {
			id
			... on Product {
				id
				title
				description
				images(first: 4) {
					edges {
						node {
							id
							src
						}
					}
				}
				variants(first: 1) {
					edges {
						node {
							id
							price
						}
					}
				}
			}
		}
	}
`;

// Initialize shopify url API endpoint
const URL = `https://${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN}/api/graphql`;

// Fetch all products
export async function fetchAllProducts() {
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
	// Destructure product edges from the response json
	const {
		data: {
			products: { edges },
		},
	} = await res.json();
	return edges;
}

// Fetch a single product
export async function fetchSingleProduct(id: string) {
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
	const {
		data: { node },
	} = await response.json();
	return node;
}
