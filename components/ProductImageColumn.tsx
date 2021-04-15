import { SetStateAction, Dispatch, useEffect } from 'react';
import { Product } from './Shop';
import { Grid, List, Image } from "semantic-ui-react";

type dispatcher<S> = Dispatch<SetStateAction<S>>;

interface Props {
  product: Product;
  image: string;
  setImage: dispatcher<string>
}

const { Row } = Grid;

const ProductImageColumn: React.FC<Props> = ({ product, image, setImage }) => {
  return (
    <>
      <Row>
        <Image src={image} fluid />
      </Row>
      <Row>
        <List horizontal divided style={{ marginTop: "1rem" }}>
          {product.images.map(image => (
            <List.Item key={image.id}>
              <Image 
                id="image"
                size={"small"} 
                src={image.src}
                onClick={() => setImage(image.src)}
              />
            </List.Item>
          ))}
        </List>
      </Row>
    </>
  );
}

export default ProductImageColumn;