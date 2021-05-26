import Link from "next/link";
import Image from "next/image";
import { Product } from "../models/ProductSDK";
import { Styles } from "../models/Styles";
import { Grid, Header } from "semantic-ui-react";

const { Row, Column } = Grid;

interface Props {
	product: Product;
	shopStyles: Styles;
}

const MobileShopItem: React.FC<Props> = ({ product, shopStyles }) => {
	const { bookTitle, cursorPointer } = shopStyles;
	const { id, title, images, variants } = product;

	return (
		<>
			<Row columns={1}>
				<Column>
					<Link href={`/product/${id}`}>
						<Header
							className={`${bookTitle} ${cursorPointer}`}
							size="medium"
						>
							{title}
						</Header>
					</Link>
				</Column>
			</Row>
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
					<Header size="medium" color="blue">
						£{variants[0].price}
					</Header>
				</Column>
			</Row>
		</>
	);
};

export default MobileShopItem;
