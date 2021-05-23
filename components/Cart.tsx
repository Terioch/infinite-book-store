import React, { useState } from "react";
import client from "../client-methods/ClientMethods";
import {
	Modal,
	Menu,
	Button,
	Icon,
	Segment,
	Header,
	Divider,
	Item as SuiItem,
} from "semantic-ui-react";

const { Item } = Menu;
const { Content } = Button;

interface Props {
	cartTrigger: any;
}

const Cart: React.FC<Props> = ({ cartTrigger }) => {
	const [displayCart, setDisplayCart] = useState(false);

	const handleCartDisplay = () => setDisplayCart(!displayCart);

	const trigger = (
		<SuiItem as="div" onClick={handleCartDisplay}>
			{cartTrigger}
		</SuiItem>
	);

	return (
		<Modal centered trigger={trigger} open={displayCart}>
			<Segment basic>
				<Menu borderless>
					<Item>
						<Header as="h2">Your Cart</Header>
					</Item>
					<Menu.Menu position="right">
						<Item>
							<Icon
								name="close"
								size="large"
								color="grey"
								link
								fitted
								onClick={handleCartDisplay}
							/>
						</Item>
					</Menu.Menu>
				</Menu>
			</Segment>
			<Segment basic textAlign="center">
				<Header as="h3">Your shopping cart is empty</Header>
			</Segment>
			<Divider />
			<Segment basic textAlign="center">
				<Button
					circular
					size="big"
					color="black"
					onClick={client.checkoutItems}
				>
					Checkout
				</Button>
			</Segment>
		</Modal>
	);
};

export default Cart;
