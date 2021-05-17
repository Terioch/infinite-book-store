import { gql } from "graphql-request";

// Initialize GraphQL query data
function Gql() {
	this.allProductsQuery = gql`
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

	this.productQuery = gql`
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

	this.createCheckoutQuery = gql`
	mutation($variantId: ID!, $quantity: INT!) {
		checkoutCreate(
			input: { lineItems: [{ variantId: $variantId, quantity: $quantity }] }
		) {
			checkout {
				id
				lineItems(first: 1) {
					
				}
			}
		}
	}
`;

	this.addLineItemsQuery = gql`
		mutation ($variantId: ID!) {
			checkoutLineItemsReplace(
				lineItems: [{ variantId: $variantId, quantity: $quantity }]
			) {
				checkout {
					id
					webUrl
				}
			}
		}
	`;
}

export default new Gql();
