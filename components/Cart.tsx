import React, { useState, useEffect } from "react";
import { Cart as CartModel } from "../models/Cart";
import client from "../client-methods/ClientMethods";
import Components from "./Components";
import {
	Modal,
	Menu,
	Button,
	Icon,
	Segment,
	Header,
	Divider,
} from "semantic-ui-react";

const { Item } = Menu;

interface Props {
	cartTrigger: any;
}

const Cart: React.FC<Props> = ({ cartTrigger }) => {
	const { CartItem } = Components;
	const [cart, setCart] = useState<CartModel>(null);
	const [displayCart, setDisplayCart] = useState(false);

	const handleCartDisplay = () => setDisplayCart(!displayCart);

	// Retrieve the current cart from storage
	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem("cart"));
		if (cart) setCart(cart);
	}, [displayCart]);

	return (
		<Modal
			centered
			trigger={cartTrigger}
			open={displayCart}
			onOpen={handleCartDisplay}
		>
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
				{/* Render the cart line items or a message if cart is empty */}
				{cart ? (
					cart?.lineItems.map((item, idx) => (
						<CartItem key={idx} item={item} />
					))
				) : (
					<Header as="h3">Your shopping cart is empty</Header>
				)}
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
