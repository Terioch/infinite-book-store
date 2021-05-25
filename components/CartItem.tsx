import React from "react";
import { LineItem } from "../models/Cart";
import { Divider, Header, List, Grid, Image } from "semantic-ui-react";
import cartStyles from "../styles/Cart.module.css";

const { Item } = List;
const { Row, Column } = Grid;

interface Props {
	item: LineItem;
}

const CartItem: React.FC<Props> = ({ item }) => {
	const {
		title,
		quantity,
		variant: { price, image },
	} = item;

	return (
		<>
			<Grid columns={2} padded="vertically" centered relaxed>
				<Row>
					<Column width={4}>
						<Image src={image.src} size="tiny" centered />
					</Column>
					<Column width={6} verticalAlign="middle" textAlign="left">
						<Header as="h3" color="blue">
							{title}
						</Header>
						<List horizontal>
							<Item>
								<Header as="h3">£{price}</Header>
							</Item>
							<Item>
								<Header as="h3">Quantity: {quantity}</Header>
							</Item>
						</List>
					</Column>
				</Row>
			</Grid>
		</>
	);
};

export default CartItem;
