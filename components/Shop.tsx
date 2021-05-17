import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { useScreenSize } from "../contexts/screenSizeContext";
import { Card, Segment } from "semantic-ui-react";
import Components from "./Components";

interface Props {
	products: Array<Product>;
}

const Shop: React.FC<Props> = ({ products }) => {
	const { screenWidth } = useScreenSize();
	const [itemsPerRow, setItemsPerRow] = useState(null);

	// Handle number of books displayed per row on different screen widths
	useEffect(() => {
		if (screenWidth > 1268) {
			setItemsPerRow(5);
		} else if (screenWidth > 968) {
			setItemsPerRow(4);
		} else if (screenWidth > 668) {
			setItemsPerRow(3);
		} else if (screenWidth > 415) {
			setItemsPerRow(2);
		} else {
			setItemsPerRow(1);
		}
	}, [screenWidth]);

	return (
		<Segment basic secondary padded>
			<Card.Group itemsPerRow={itemsPerRow}>
				{products.map((product, idx) => (
					<Components.ShopItem key={idx} product={product} />
				))}
			</Card.Group>
		</Segment>
	);
};

export default Shop;
