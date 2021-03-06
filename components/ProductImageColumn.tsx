import { SetStateAction, Dispatch } from "react";
import Image from "next/image";
import { Image as ImageModel } from "../models/ProductSDK";
import { Styles } from "../models/Styles";
import { Grid, List, Image as SuiImage, Segment } from "semantic-ui-react";

type dispatcher<S> = Dispatch<SetStateAction<S>>;

interface Props {
	images: Array<ImageModel>;
	mainImage: string;
	setMainImage: dispatcher<string>;
	productStyles: Styles;
}

const { Row } = Grid;

const ProductImageColumn: React.FC<Props> = ({
	images,
	mainImage,
	setMainImage,
	productStyles,
}) => {
	return (
		<>
			<Row centered>
				<Segment basic textAlign="center">
					<Image src={mainImage} height={400} width={300} />
				</Segment>
			</Row>
			<Row centered>
				<List horizontal divided style={{ marginTop: "1rem" }}>
					{images.map((image: ImageModel) => (
						<List.Item key={image.id}>
							<SuiImage
								className={productStyles.smallImage}
								src={image.src}
								size="tiny"
								onClick={() => setMainImage(image.src)}
							/>
						</List.Item>
					))}
				</List>
			</Row>
		</>
	);
};

export default ProductImageColumn;
