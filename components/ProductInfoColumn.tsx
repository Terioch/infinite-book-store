import React from "react";
import { Product } from "../models/Product";
import MyPopup from "./Popup";
import { Card, Header, List, Input } from "semantic-ui-react";

interface ProductStyles {
	[key: string]: string;
}

interface Props {
	product: Product;
	productStyles: ProductStyles;
	quantity: number | string;
	handleQuantity: (e: any) => void;
	addToCart: () => Promise<void>;
	popupContent: string;
}

const { Content } = Card;

const ProductInfoColumn: React.FC<Props> = ({
	product,
	productStyles,
	quantity,
	handleQuantity,
	addToCart,
	popupContent,
}) => {
	const { title, description, variants } = product.node;

	return (
		<>
			<Card fluid color="teal">
				<Content>
					<Header as="h2">{title}</Header>
				</Content>
				<Content>{description}</Content>
			</Card>
			<Card
				className={productStyles.checkout}
				onClick={() => addToCart()}
				raised
			>
				<Content>
					<List link relaxed>
						<MyPopup popupContent={popupContent} variants={variants} />
					</List>
				</Content>
			</Card>
			<Input
				label="Quantity"
				type="number"
				placeholder="Set to 1 if invalid..."
				value={quantity}
				onChange={(e: any) => handleQuantity(e)}
			/>
		</>
	);
};

export default ProductInfoColumn;
