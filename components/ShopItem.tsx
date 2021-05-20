import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../models/ProductSDK";
import { Header, Segment, Grid } from "semantic-ui-react";
import shopStyles from "../styles/Shop.module.css";

const { Row, Column } = Grid;

interface Props {
	product: Product;
}

const ShopItem: React.FC<Props> = ({ product }) => {
	const { bookTitle, cursorPointer } = shopStyles;
	const { id, title, images, variants } = product;

	return (
		<Segment basic color="grey" style={{ backgroundColor: "#fff" }}>
			<Grid columns={2}>
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
							<Header className={`${bookTitle} ${cursorPointer}`} as="h3">
								{title}
							</Header>
						</Link>
						<Header as="h3" color="blue">
							£{variants[0].price}
						</Header>
					</Column>
				</Row>
			</Grid>
		</Segment>
	);
};

export default ShopItem;
