import React from "react";
import { Product } from "../models/Product";
import MyPopup from "./Popup";
import {
	Card,
	Header,
	List,
	Input,
	Divider,
	Segment,
} from "semantic-ui-react";

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
	console.log(variants.edges[0].node.inventoryQuantity);

	return (
		<Segment basic vertical>
			<Segment color="teal">
				<Header as="h2">{title}</Header>
				<Divider />
				<Header as="h3" color="blue">
					14 in stock
				</Header>
				<Input
					fluid
					label="Quantity"
					type="number"
					placeholder="Set to 1 if invalid..."
					value={quantity}
					onChange={(e: any) => handleQuantity(e)}
				/>
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
			</Segment>
			<Segment basic style={{ backgroundColor: "#fff" }}>
				{description}
			</Segment>
		</Segment>
	);
};

export default ProductInfoColumn;

/*
<Segment fluid color="teal" style={{ backgroundColor: "#fff" }}>
	<Content>
		<Header as="h2">{title}</Header>
	</Content>
	<Content>
		<Header as="h3" color="blue">
			14 in stock
		</Header>
		<Input
			label="Quantity"
			type="number"
			placeholder="Set to 1 if invalid..."
			value={quantity}
			onChange={(e: any) => handleQuantity(e)}
		/>
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
	</Content>
</Segment>
<Segment fluid basic style={{ backgroundColor: "#fff" }}>
	<Content description>{description}</Content>
</Segment>
*/
