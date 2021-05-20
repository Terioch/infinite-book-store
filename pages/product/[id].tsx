import { useState } from "react";
import { client as Client } from "../../utils/shopify";
import client from "../../client-methods/ClientMethods";
import { Product } from "../../models/Product";
import Components from "../../components/Components";
import { Segment, Grid } from "semantic-ui-react";
import productStyles from "../../styles/product.module.css";

const { fetchAll, fetchOne } = client.product;
const { Row, Column } = Grid;

interface Props {
	product: Product;
}

const product: React.FC<Props> = ({ product }) => {
	const { ProductImageColumn, ProductInfoColumn } = Components;
	const { images, variants } = product.node;

	const [mainImage, setMainImage] = useState(images?.edges[0].node.src);
	const [quantity, setQuantity] = useState<number | string>(1);
	const [popupContent, setPopupContent] = useState("");

	// Implement product checkout
	const addToCart = async () => {
		// Ensure that quantity is valid
		if (quantity < 1 || !quantity) {
			setPopupContent("Failed to add item to cart");
			return;
		}

		setPopupContent("Item successfully added to cart");

		let checkoutId = localStorage.getItem("checkoutId");

		// Create new checkout if checkoutId was not fetched from session storage
		if (!checkoutId) {
			const checkout = await Client.checkout.create();
			checkoutId = checkout.id;
		}

		localStorage.setItem("checkoutId", checkoutId);

		// Add line items to checkout cart
		const cart = await Client.checkout.addLineItems(checkoutId, [
			{
				variantId: variants.edges[0].node.id,
				quantity,
			},
		]);

		localStorage.setItem("cart", JSON.stringify(cart));
	};

	const handleQuantity = (e: any) => {
		const value = parseInt(e.target.value);
		setQuantity(value ? value : "");
	};

	return (
		<Segment padded secondary>
			<Grid container centered stackable>
				<Row columns={2}>
					<Column width={6} textAlign="center">
						<ProductImageColumn
							images={images.edges}
							mainImage={mainImage}
							setMainImage={setMainImage}
							productStyles={productStyles}
						/>
					</Column>
					<Column width={10}>
						<ProductInfoColumn
							product={product}
							productStyles={productStyles}
							quantity={quantity}
							handleQuantity={handleQuantity}
							addToCart={addToCart}
							popupContent={popupContent}
						/>
					</Column>
				</Row>
			</Grid>
		</Segment>
	);
};

export const getStaticProps = async ({ params: { id } }) => {
	const product = await fetchOne(id);

	return {
		props: {
			product: JSON.parse(JSON.stringify(product)),
		},
	};
};

export const getStaticPaths = async () => {
	// Generate paths for each product by id
	const products = await fetchAll();
	const idList: Array<number> = products.map((p: any) => p.node.id);
	const paths = idList.map(id => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: false,
	};
};

export default product;
