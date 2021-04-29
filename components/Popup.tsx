import { Popup, Header, List, Icon } from "semantic-ui-react";

const MyPopup = ({ popupContent, variants }) => {
	return (
		<Popup
			on="click"
			trigger={
				<List.Item>
					<Header>
						Add To Cart
						<Icon
							name="add to cart"
							color="teal"
							style={{ marginLeft: ".5rem" }}
						/>
					</Header>
					<Header>£{variants.edges[0].price}</Header>
				</List.Item>
			}
		>
			{popupContent}
		</Popup>
	);
};

export default MyPopup;
