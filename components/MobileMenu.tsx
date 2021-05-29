import { useState } from "react";
import Link from "next/link";
import Components from "./Components";
import client from "../client-methods/ClientMethods";
import { Styles } from "../models/Styles";
import { useAuth } from "../contexts/authContext";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

const { Item } = Menu;

interface Props {
	navStyles: Styles;
}

const MobileMenu: React.FC<Props> = ({ navStyles }) => {
	const { Cart } = Components;
	const { user } = useAuth();
	const [visible, setVisible] = useState(false);

	const handleVisibility = () => setVisible(!visible);

	const handleAuthState = () => {
		if (user) {
			return (
				<Item link onClick={client.signOutUser}>
					<Icon name="sign out" />
					Sign Out
				</Item>
			);
		}
		return (
			<Link href="/login">
				<Item link>
					<Icon name="sign in" />
					Sign In
				</Item>
			</Link>
		);
	};

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
				{handleAuthState()}
				<Item
					link
					onClick={client.checkoutItems}
					//disabled={checkoutDisabled}
				>
					<Icon name="arrow right" />
					Checkout
				</Item>
			</Sidebar>
		</>
	);
};

export default MobileMenu;
