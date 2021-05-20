import Link from "next/link";
import { useAuth } from "../contexts/authContext";
import Components from "./Components";
import client from "../client-methods/ClientMethods";
import {
	Segment,
	Menu,
	Header,
	Button,
	Icon,
	MenuItemProps,
} from "semantic-ui-react";
import navStyles from "../styles/Nav.module.css";

const { Item } = Menu;

const Nav: React.FC<MenuItemProps> = () => {
	const { menu, title, rightMenu } = navStyles;
	const { Cart } = Components;
	const { user } = useAuth();

	// Conditionally render sign-in/sign-out button
	const handleAuthState = () => {
		if (user) {
			return (
				<Button inverted color="grey" onClick={client.signOutUser}>
					Sign Out
				</Button>
			);
		} else {
			return (
				<Link href="/login">
					<Button inverted color="grey">
						Sign In
					</Button>
				</Link>
			);
		}
	};

	return (
		<Segment basic inverted padded>
			<Menu className={menu} fluid borderless color="black" inverted>
				<Link href="/">
					<Item>
						<Header className={title} as="h1" color="blue">
							Infinite Book Store
							<Icon name="bolt" color="grey" />
						</Header>
					</Item>
				</Link>
				<Item className={rightMenu}>
					<Item>
						<Cart />
					</Item>
					<Item fitted="horizontally">{handleAuthState()}</Item>
					<Item>
						<Button
							inverted
							labelPosition="right"
							icon
							color="green"
							onClick={() => client.checkoutItems()}
						>
							<Icon name="arrow right" />
							Checkout
						</Button>
					</Item>
				</Item>
			</Menu>
		</Segment>
	);
};

export default Nav;
