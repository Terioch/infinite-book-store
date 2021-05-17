import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { useScreenSize } from "../contexts/screenSizeContext";
import { Segment, Grid, Card } from "semantic-ui-react";
import Components from "./Components";

const { Row, Column } = Grid;

interface Props {
	products: Array<Product>;
}

const Shop: React.FC<Props> = ({ products }) => {
	const { screenWidth } = useScreenSize();

	return (
		<Segment padded secondary basic>
			<Grid columns={2} stackable centered divided="vertically">
				<Row>
					{products.map((product, idx) => (
						<Column key={idx}>
							<Components.ShopItem product={product} />
						</Column>
					))}
				</Row>
			</Grid>
		</Segment>
	);
};

export default Shop;

{
	/* <Card.Group itemsPerRow="2" stackable>
	{products.map((product, idx) => (
		<Components.ShopItem key={idx} product={product} />
	))}
</Card.Group> */
}
