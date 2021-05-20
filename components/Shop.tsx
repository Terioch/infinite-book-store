import { Product } from "../models/ProductSDK";
import { Segment, Grid } from "semantic-ui-react";
import Components from "./Components";

const { Row, Column } = Grid;

interface Props {
	products: Array<Product>;
}

const Shop: React.FC<Props> = ({ products }) => {
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
