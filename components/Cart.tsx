import React, { useState, useEffect } from "react";
import Components from "./Components";
import { Cart as CartModel } from "../models/Cart";
import client from "../client-methods/ClientMethods";
import { client as Client } from "../utils/shopify";
import { useCheckoutDisabled } from "../contexts/checkoutDisabledContext";
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
	const { checkoutDisabled, handleCheckoutDisabled } =
		useCheckoutDisabled();

	const handleCartDisplay = () => setDisplayCart(!displayCart);

	// Set checkout disabled state
	useEffect(() => {
		handleCheckoutDisabled();
	});

	// Set the current cart from storage
	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem("cart"));
		if (cart) setCart(cart);
	}, [displayCart]);

	// Remove requested cart item from state and storage
	const handleCartItemRemoval = async (id: string) => {
		const checkoutId = localStorage.getItem("checkoutId");
		const filteredCart = await Client.checkout.removeLineItems(
			checkoutId,
			id
		);
		localStorage.setItem("cart", JSON.stringify(filteredCart));
		setCart(filteredCart);
	};

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
				{cart?.lineItems.length > 0 ? (
					cart?.lineItems.map((item, idx) => (
						<CartItem
							key={idx}
							item={item}
							handleCartItemRemoval={handleCartItemRemoval}
						/>
					))
				) : (
					<Header as="h3">Your shopping cart is empty</Header>
				)}
			</Segment>
			<Divider />
			<Segment basic textAlign="center">
				<Button
					circular
					disabled={checkoutDisabled}
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
