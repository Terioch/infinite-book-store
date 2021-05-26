import { Product } from "../models/ProductSDK";
import Components from "./Components";
import { useScreenSize } from "../contexts/screenSizeContext";
import { Segment, Grid } from "semantic-ui-react";
import shopStyles from "../styles/Shop.module.css";

const { Row, Column } = Grid;

interface Props {
	products: Array<Product>;
}

const Shop: React.FC<Props> = ({ products }) => {
	const { MobileShopItem, DesktopShopItem } = Components;
	const { screenWidth } = useScreenSize();

	return (
		<Segment padded secondary basic>
			<Grid columns={2} stackable divided="vertically">
				<Row>
					{products.map((product, idx) => (
						<Column key={idx}>
							<Segment
								basic
								color="grey"
								style={{ backgroundColor: "#fff" }}
							>
								<Grid columns={2}>
									{screenWidth < 375 ? (
										<MobileShopItem
											product={product}
											shopStyles={shopStyles}
										/>
									) : (
										<DesktopShopItem
											product={product}
											shopStyles={shopStyles}
										/>
									)}
								</Grid>
							</Segment>
						</Column>
					))}
				</Row>
			</Grid>
		</Segment>
	);
};

export default Shop;
