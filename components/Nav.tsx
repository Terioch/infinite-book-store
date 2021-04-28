import Link from "next/link";
import { useAuth } from "../contexts/authContext";
import SharedFunctions from "../shared-functions/SharedFunctions";
import {
	Segment,
	Menu,
	Header,
	Button,
	Icon,
	MenuItemProps,
} from "semantic-ui-react";
import navStyles from "../styles/Nav.module.css";

// Destructure semantic ui components
const { Item } = Menu;
const { Content } = Button;

const Nav: React.FC<MenuItemProps> = () => {
	const { menu, title, rightMenu } = navStyles;
	const { checkoutItems, signOutUser } = SharedFunctions;
	const { user } = useAuth();

	// Conditionally render sign-in/sign-out button
	const handleAuthState = () => {
		if (user) {
			return (
				<Button inverted color="grey" onClick={signOutUser}>
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
				<Item>
					<Header className={title} as="h1" color="blue">
						Infinite Book Store
						<Icon name="bolt" color="grey" />
					</Header>
				</Item>
				<Item className={rightMenu}>
					<Item>
						<Link href="/">
							<Button animated="vertical" inverted color="grey">
								<Content hidden>Shop</Content>
								<Content visible>
									<Icon name="shop" />
								</Content>
							</Button>
						</Link>
					</Item>
					<Item fitted="horizontally">{handleAuthState()}</Item>
					<Item>
						<Button
							inverted
							labelPosition="right"
							icon
							color="green"
							onClick={() => checkoutItems()}
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
