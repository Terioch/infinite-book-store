import { SetStateAction, Dispatch } from "react";
import { Image } from "../models/Product";
import { Grid, List, Image as SuiImage } from "semantic-ui-react";

type dispatcher<S> = Dispatch<SetStateAction<S>>;

interface Props {
	images: Array<Image>;
	mainImage: string;
	setMainImage: dispatcher<string>;
}

const { Row } = Grid;

const ProductImageColumn: React.FC<Props> = ({
	images,
	mainImage,
	setMainImage,
}) => {
	return (
		<>
			<Row>
				<SuiImage src={mainImage} fluid />
			</Row>
			<Row>
				<List horizontal divided style={{ marginTop: "1rem" }}>
					{images.map((image: Image) => (
						<List.Item key={image.node.id}>
							<SuiImage
								id="image"
								size={"small"}
								src={image.node.src}
								onClick={() => setMainImage(image.node.src)}
							/>
						</List.Item>
					))}
				</List>
			</Row>
		</>
	);
};

export default ProductImageColumn;
