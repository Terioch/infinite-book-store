import { useState } from "react";
import {
	Modal,
	Menu,
	Button,
	Icon,
	Container,
	Header,
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
		<Modal
			centered
			onMount={handleCartDisplay}
			onUnmount={handleCartDisplay}
			trigger={trigger}
		>
			<Menu>
				<Item>Hello</Item>
				<Item>Hello</Item>
				<Item>Hello</Item>
			</Menu>
		</Modal>
	);
};

export default Cart;
