import { useState } from "react";
import Link from "next/link";
import { Styles } from "../models/Styles";
import client from "../client-methods/ClientMethods";
import Components from "./Components";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

const { Item } = Menu;

interface Props {
	navStyles: Styles;
}

const MobileMenu: React.FC<Props> = ({ navStyles }) => {
	const { Cart } = Components;
	const [visible, setVisible] = useState(false);

	const handleVisibility = () => setVisible(!visible);

	const cartTrigger = (
		<Item link>
			<Icon name="cart" />
			Cart
		</Item>
	);

	return (
		<>
			<Item className={navStyles.rightMenu}>
				<Icon name="bars" size="large" link onClick={handleVisibility} />
			</Item>
			<Sidebar
				as={Menu}
				visible={visible}
				animation="overlay"
				inverted
				vertical
			>
				<Item position="left">
					<Icon
						name="close"
						size="large"
						link
						fitted
						onClick={handleVisibility}
					/>
				</Item>
				<Link href="/">
					<Item link>
						<Icon name="home" />
						Home
					</Item>
				</Link>
				<Cart cartTrigger={cartTrigger} />
				<Link href="/login">
					<Item link>
						<Icon name="sign in" />
						Sign In
					</Item>
				</Link>
				<Item link onClick={client.checkoutItems}>
					<Icon name="arrow right" />
					Checkout
				</Item>
			</Sidebar>
		</>
	);
};

export default MobileMenu;
