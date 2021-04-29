import React from "react";
import { Product } from "../models/Product";
import { Card, Segment } from "semantic-ui-react";
import Components from "./Components";

interface Props {
	products: Array<Product>;
}

const Shop: React.FC<Props> = ({ products }) => {
	return (
		<Segment basic secondary padded>
			<Card.Group itemsPerRow={4} stackable>
				{products.map((product, idx) => (
					<Components.ShopItem key={idx} product={product.node} />
				))}
			</Card.Group>
		</Segment>
	);
};

export default Shop;
