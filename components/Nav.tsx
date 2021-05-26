import Link from "next/link";
import Components from "./Components";
import { useScreenSize } from "../contexts/screenSizeContext";
import {
	Segment,
	Menu,
	Header,
	Icon,
	MenuItemProps,
} from "semantic-ui-react";
import navStyles from "../styles/Nav.module.css";

const { Item } = Menu;

const Nav: React.FC<MenuItemProps> = () => {
	const { menu, title } = navStyles;
	const { DesktopMenu, MobileMenu } = Components;
	const { screenWidth } = useScreenSize();

	return (
		<Segment basic inverted padded>
			<Menu className={menu} fluid borderless color="black" inverted>
				<Link href="/">
					<Item>
						<Header
							className={title}
							size={screenWidth < 468 ? "medium" : "huge"}
							color="blue"
						>
							Infinite Book Store
							<Icon name="bolt" color="grey" />
						</Header>
					</Item>
				</Link>
				{screenWidth < 968 ? (
					<MobileMenu navStyles={navStyles} />
				) : (
					<DesktopMenu navStyles={navStyles} />
				)}
			</Menu>
		</Segment>
	);
};

export default Nav;
