import React from "react";
import Link from "next/link";
import client from "../client-methods/ClientMethods";
import { useAuth } from "../contexts/authContext";
import { useScreenSize } from "../contexts/screenSizeContext";
import { Segment, Menu } from "semantic-ui-react";
import footerStyles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
	const { container, menu, stick } = footerStyles;
	const { user } = useAuth();
	const { screenHeight, screenWidth } = useScreenSize();

	// Position footer at bottom of page if both screen height and width are sufficiently great
	const handleFooterPosition = () => {
		if (screenHeight >= 1024 && screenWidth >= 768) {
			return stick;
		}
	};

	// Conditionally render sign-in/sign-out item
	const handleAuthState = () => {
		if (user) {
			return (
				<Menu.Item as="a" onClick={client.signOutUser}>
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
		<Segment
			className={`${container} ${handleFooterPosition()}`}
			basic
			inverted
		>
			<Menu className={menu} inverted fluid compact>
				<Link href="/">
					<Menu.Item as="a">Shop</Menu.Item>
				</Link>
				{handleAuthState()}
				<Menu.Item as="a" onClick={() => client.checkoutItems()}>
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
