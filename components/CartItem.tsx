import React from "react";
import { LineItem } from "../models/Cart";
import { Header } from "semantic-ui-react";

interface Props {
	item: LineItem;
}

const CartItem: React.FC<Props> = ({ item }) => {
	return (
		<>
			<Header as="h3">{item.title}</Header>
		</>
	);
};

export default CartItem;
