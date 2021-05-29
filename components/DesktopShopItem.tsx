import Link from "next/link";
import Image from "next/image";
import { Product } from "../models/ProductSDK";
import { Styles } from "../models/Styles";
import { useScreenSize } from "../contexts/screenSizeContext";
import { Grid, Header } from "semantic-ui-react";

const { Row, Column } = Grid;

interface Props {
	product: Product;
	shopStyles: Styles;
}

const DesktopShopItem: React.FC<Props> = ({ product, shopStyles }) => {
	const { bookTitle, cursorPointer } = shopStyles;
	const { id, title, images, variants } = product;
	const { screenWidth } = useScreenSize();

	return (
		<Row>
			<Link href={`/product/${id}`}>
				<Column className={cursorPointer}>
					<Image
						className={cursorPointer}
						src={images[0].src}
						height={200}
						width={180}
					/>
				</Column>
			</Link>
			<Column verticalAlign="middle">
				<Link href={`/product/${id}`}>
					<Header
						className={`${bookTitle} ${cursorPointer}`}
						as="a"
						size={screenWidth < 468 ? "tiny" : "medium"}
					>
						{title}
					</Header>
				</Link>
				<Header size={screenWidth < 468 ? "small" : "medium"} color="blue">
					£{variants[0].price}
				</Header>
			</Column>
		</Row>
	);
};

export default DesktopShopItem;
