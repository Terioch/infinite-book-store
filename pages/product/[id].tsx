import { useState } from "react";
import { client } from "../../utils/shopify";
import { Product } from "../../models/Product";
import { Segment, Grid } from "semantic-ui-react";
import Components from "../../components/Components";
import productStyles from "../../styles/product.module.css";

const { Row, Column } = Grid;

interface Props {
	product: Product;
}

const product: React.FC<Props> = ({ product }) => {
	const { ProductImageColumn, ProductInfoColumn } = Components;
	const { images, variants } = product;
	const [image, setImage] = useState(images[0].src);
	const [quantity, setQuantity] = useState<number | string>(1);
	const [popupContent, setPopupContent] = useState("");

	// Implement product checkout
	const addToCart = async () => {
		// Ensure that quantity is valid
		if (quantity < 1 || !quantity) {
			setPopupContent("Failed to add item to cart");
			return;
		}

		// Trigger a popup to indicate success
		setPopupContent("Item successfully added to cart");

		let checkoutId = sessionStorage.getItem("checkoutId");

		// Create new checkout if checkoutId was not fetched from session storage
		if (!checkoutId) {
			const checkout = await client.checkout.create();
			checkoutId = checkout.id;
		}

		// Set item within session storage and ensure quantity is valid
		sessionStorage.setItem("checkoutId", checkoutId);

		// Add line items to checkout cart
		const cart = await client.checkout.addLineItems(checkoutId, [
			{
				variantId: variants[0].id,
				quantity,
			},
		]);

		sessionStorage.setItem("cart", JSON.stringify(cart));
	};

	// Update quantity on input change
	const handleQuantity = (e: any) => {
		const value = parseInt(e.target.value);
		setQuantity(value ? value : "");
	};

	return (
		<Segment padded secondary>
			<Grid container centered stackable>
				<Row columns={2}>
					<Column width={10}>
						<ProductImageColumn
							product={product}
							image={image}
							setImage={setImage}
						/>
					</Column>
					<Column width={6}>
						<Row>
							<ProductInfoColumn
								product={product}
								productStyles={productStyles}
								quantity={quantity}
								handleQuantity={handleQuantity}
								addToCart={addToCart}
								popupContent={popupContent}
							/>
						</Row>
					</Column>
				</Row>
			</Grid>
		</Segment>
	);
};

export const getStaticProps = async ({ params: { id } }) => {
	// Fetch single product from Shopify API
	const product = await client.product.fetch(id);

	return {
		props: {
			product: JSON.parse(JSON.stringify(product)),
		},
	};
};

export const getStaticPaths = async () => {
	// Generate paths for each product by id
	const products = await client.product.fetchAll();
	const idList: Array<number> = products.map((p: any) => p.id);
	const paths = idList.map(id => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: false,
	};
};

export default product;
