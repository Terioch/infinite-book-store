import { Popup, List, Button, Card } from "semantic-ui-react";

const { Item, Content, Header, Icon } = List;

interface Props {
	popupContent: string;
	addToCart: () => void;
}

const MyPopup: React.FC<Props> = ({ popupContent, addToCart }) => {
	const trigger = (
		<Card link onClick={addToCart}>
			<Card.Content>
				<List horizontal>
					<Item>
						<Content verticalAlign="middle">
							<Header as="h3">Add To Cart</Header>
						</Content>
					</Item>
					<Item>
						<Icon
							name="add to cart"
							color="teal"
							size="big"
							verticalAlign="middle"
						/>
					</Item>
				</List>
			</Card.Content>
		</Card>
	);

	return (
		<Popup on="click" trigger={trigger}>
			{popupContent}
		</Popup>
	);
};

export default MyPopup;

{
	/* <List.Item>
	<Header>
		Add To Cart
		<Icon
			name="add to cart"
			color="teal"
			style={{ marginLeft: ".5rem" }}
		/>
	</Header>
	<Header>£{variants[0].price}</Header>
</List.Item> */
}
