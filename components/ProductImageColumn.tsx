import { SetStateAction, Dispatch } from "react";
import { Product } from "../models/Product";
import { Grid, List, Image } from "semantic-ui-react";

type dispatcher<S> = Dispatch<SetStateAction<S>>;

interface Props {
	product: Product;
	images: Product;
	image: string;
	setImage: dispatcher<string>;
}

const { Row } = Grid;

const ProductImageColumn: React.FC<Props> = ({
	product,
	images,
	image,
	setImage,
}) => {
	return (
		<>
			<Row>
				<Image src={image} fluid />
			</Row>
			<Row>
				<List horizontal divided style={{ marginTop: "1rem" }}>
					{images.map(image => (
						<List.Item key={image.node.id}>
							<Image
								id="image"
								size={"small"}
								src={image.node.src}
								onClick={() => setImage(image.src)}
							/>
						</List.Item>
					))}
				</List>
			</Row>
		</>
	);
};

export default ProductImageColumn;
