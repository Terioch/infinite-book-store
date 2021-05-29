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
				<Button animated onClick={client.signOutUser}>
					<Content visible>Sign Out</Content>
					<Content hidden>
						<Icon name="sign out" />
					</Content>
				</Button>
			);
		}
		return (
			<Link href="/login">
				<Button animated>
					<Content visible>Sign In</Content>
					<Content hidden>
						<Icon name="sign in" />
					</Content>
				</Button>
			</Link>
		);
	};

	const cartTrigger = (
		<Button animated="vertical">
			<Content hidden>Cart</Content>
			<Content visible>
				<Icon name="cart" />
			</Content>
		</Button>
	);

	return (
		<Menu className={navStyles.rightMenu} inverted compact>
			<Item fitted="horizontally">
				<Button.Group>
					<Button icon>
						<Icon name="home" />
					</Button>
					<Cart cartTrigger={cartTrigger} />
					{handleAuthState()}
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
				</Button.Group>
			</Item>
		</Menu>
	);
};

export default DesktopMenu;

{
	/* <Menu className={navStyles.rightMenu} inverted compact>
	<Item fitted="horizontally">
		<Button icon color="black">
			<Icon name="home" />
		</Button>
	</Item>
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
</Menu> */
}
