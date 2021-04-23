import React from "react";
import Link from "next/link";
import { useAuth } from "../contexts/authContext";
import { Segment, Menu } from "semantic-ui-react";
import SharedFunctions from "../shared-functions/SharedFunctions";
import footerStyles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
	const { container, menu } = footerStyles;
	const { checkoutItems, signOutUser } = SharedFunctions;
	const { user } = useAuth();

	// Conditionally render sign-in/sign-out item
	const handleAuthState = () => {
		if (user) {
			return (
				<Menu.Item as="a" onClick={signOutUser}>
					Sign Out
				</Menu.Item>
			);
		} else {
			return (
				<Link href="/login">
					<Menu.Item as="a">Sign In</Menu.Item>
				</Link>
			);
		}
	};

	return (
		<Segment className={container} basic inverted>
			<Menu className={menu} inverted fluid compact>
				<Link href="/">
					<Menu.Item as="a">Shop</Menu.Item>
				</Link>
				{handleAuthState()}
				<Menu.Item as="a" onClick={() => checkoutItems()}>
					Checkout
				</Menu.Item>
			</Menu>
			<Menu inverted vertical text fluid>
				<Menu.Item>Infinite Book Store | Copyright &copy; 2021</Menu.Item>
			</Menu>
		</Segment>
	);
};

export default Footer;
