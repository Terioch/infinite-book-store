import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../models/Product";
import { Header, Segment, Grid, Card } from "semantic-ui-react";
import shopStyles from "../styles/Shop.module.css";

const { Row, Column } = Grid;

interface Props {
	product: Product;
}

const ShopItem: React.FC<Props> = ({ product }) => {
	const { id, title, images, variants } = product.node;
	//console.log(product.node);

	return (
		<Segment basic color="grey" style={{ backgroundColor: "#fff" }}>
			<Grid columns={2}>
				<Row>
					<Column>
						<Link href={`/product/${id}`}>
							<Image
								className={shopStyles.image}
								src={images.edges[0].node.src}
								height={200}
								width={180}
							/>
						</Link>
					</Column>
					<Column verticalAlign="middle">
						<Header as="h3" color="black">
							{title}
						</Header>
						<Header as="h3" color="blue">
							£{variants.edges[0].node.price}
						</Header>
					</Column>
				</Row>
			</Grid>
		</Segment>
	);
};

export default ShopItem;

/*
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
*/
