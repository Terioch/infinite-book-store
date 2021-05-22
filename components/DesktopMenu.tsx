import Link from "next/link";
import { Styles } from "../models/Styles";
import client from "../client-methods/ClientMethods";
import { useAuth } from "../contexts/authContext";
import Components from "./Components";
import { Menu, Button, Icon } from "semantic-ui-react";

const { Item } = Menu;

interface Props {
	navStyles: Styles;
}

const DesktopMenu: React.FC<Props> = ({ navStyles }) => {
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
		<Item className={navStyles.rightMenu}>
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
	);
};

export default DesktopMenu;
