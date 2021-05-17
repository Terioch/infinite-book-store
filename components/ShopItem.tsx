import React from "react";
import Link from "next/link";
import { Product } from "../models/Product";
import { Header, Card, Image } from "semantic-ui-react";
import shopStyles from "../styles/Shop.module.css";

interface Props {
	product: Product;
}

const ShopItem: React.FC<Props> = ({ product }) => {
	const { id, title, images, variants } = product.node;
	//console.log(product.node);

	return (
		<Link href={`product/${id}`}>
			<Card color="blue">
				<Card.Content style={{ padding: "0" }}>
					<Image
						className={shopStyles.image}
						src={images.edges[0].node.src}
						fluid
					/>
				</Card.Content>
				<Card.Content>
					<Header as="h2">£{variants.edges[0].node.price}</Header>
					<Header as="h3">{title}</Header>
				</Card.Content>
			</Card>
		</Link>
	);
};

export default ShopItem;
