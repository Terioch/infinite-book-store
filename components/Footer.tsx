import React from "react";
import Link from "next/link";
import Components from "./Components";
import client from "../client-methods/ClientMethods";
import { useAuth } from "../contexts/authContext";
import { Segment, Menu } from "semantic-ui-react";
import footerStyles from "../styles/Footer.module.css";

const { Item } = Menu;
const { container, menu } = footerStyles;

const Footer: React.FC = () => {
	const { Cart } = Components;
	const { user } = useAuth();

	const cartTrigger = <Item link>Cart</Item>;

	// Conditionally render sign-in/sign-out item
	const handleAuthState = () => {
		if (user) {
			return (
				<Item as="a" onClick={client.signOutUser}>
					Sign Out
				</Item>
			);
		} else {
			return (
				<Link href="/login">
					<Item link>Sign In</Item>
				</Link>
			);
		}
	};

	return (
		<Segment className={container} basic inverted>
			<Menu className={menu} inverted fluid compact>
				<Link href="/">
					<Item link>Home</Item>
				</Link>
				<Cart cartTrigger={cartTrigger} />
				{handleAuthState()}
			</Menu>
			<Menu inverted vertical text fluid>
				<Item>Infinite Book Store | Copyright &copy; 2021</Item>
			</Menu>
		</Segment>
	);
};

export default Footer;
