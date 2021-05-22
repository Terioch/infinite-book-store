import { Styles } from "../models/Styles";
import { Icon, Menu } from "semantic-ui-react";

const { Item } = Menu;

interface Props {
	navStyles: Styles;
}

const MobileMenu: React.FC<Props> = ({ navStyles }) => {
	return (
		<Item className={navStyles.rightMenu}>
			<Icon name="bars" size="large" link />
		</Item>
	);
};

export default MobileMenu;
