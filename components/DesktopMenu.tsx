import Link from "next/link";
import Components from "./Components";
import { Styles } from "../models/Styles";
import client from "../client-methods/ClientMethods";
import { useAuth } from "../contexts/authContext";
import { useCheckoutDisabled } from "../contexts/checkoutDisabledContext";
import { Menu, Button, Icon } from "semantic-ui-react";

const { Item } = Menu;
const { Content } = Button;

interface Props {
	navStyles: Styles;
}

const DesktopMenu: React.FC<Props> = ({ navStyles }) => {
	const { Cart } = Components;
	const { user } = useAuth();
	const { checkoutDisabled } = useCheckoutDisabled();

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

	const cartTrigger = (
		<Button animated="vertical" inverted color="grey">
			<Content hidden>Cart</Content>
			<Content visible>
				<Icon name="cart" />
			</Content>
		</Button>
	);

	return (
		<Item className={navStyles.rightMenu}>
			{/* <Item fitted="horizontally" icon>
				<Icon name="home" size="large" link />
			</Item> */}
			<Item>
				<Cart cartTrigger={cartTrigger} />
			</Item>
			<Item fitted="horizontally">{handleAuthState()}</Item>
			<Item>
				<Button
					inverted
					labelPosition="right"
					icon
					color="green"
					disabled={checkoutDisabled}
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
