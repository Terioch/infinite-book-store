import React from "react";
import { LineItem } from "../models/Cart";
import { Segment, Header, List, Grid, Image } from "semantic-ui-react";
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
		<Segment>
			<Grid
				columns={2}
				padded="vertically"
				stackable={false}
				centered
				relaxed
			>
				<Row>
					<Column width={4} mobile={6}>
						<Image src={image.src} size="tiny" centered />
					</Column>
					<Column
						width={6}
						mobile={10}
						verticalAlign="middle"
						textAlign="left"
					>
						<Header size="medium" color="blue">
							{title}
						</Header>
						<List horizontal>
							<Item>
								<Header size="medium">£{price}</Header>
							</Item>
							<Item>
								<Header size="medium">Qty: {quantity}</Header>
							</Item>
						</List>
					</Column>
				</Row>
			</Grid>
		</Segment>
	);
};

export default CartItem;
