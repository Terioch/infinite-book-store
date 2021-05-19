import { useState } from "react";
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
const { Content } = Button;

interface Props {}

const Cart: React.FC<Props> = () => {
	const [displayCart, setDisplayCart] = useState(false);

	const handleCartDisplay = () => setDisplayCart(!displayCart);

	const trigger = (
		<Button
			animated="vertical"
			inverted
			color="grey"
			onClick={handleCartDisplay}
		>
			<Content hidden>Cart</Content>
			<Content visible>
				<Icon name="cart" />
			</Content>
		</Button>
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
				<Button circular size="big" color="black">
					Checkout
				</Button>
			</Segment>
		</Modal>
	);
};

export default Cart;
