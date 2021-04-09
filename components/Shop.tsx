import React from "react";
import { Card, Segment } from "semantic-ui-react";
import Components from "./Components";

interface Img {
  id: string;
  src: string;
}

interface Variant {
  price: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  images: Array<Img>;
  variants: Variant;
}

interface Props {
  products: Array<Product>
}

const Shop: React.FC<Props> = ({ products }) => {
  return (
    <Segment basic secondary padded>
      <Card.Group itemsPerRow={4} stackable>
        {products.map((product, idx) => (
          <Components.ShopItem 
            key={idx}
            product={product}
          />
        ))}
      </Card.Group>
    </Segment>
  );
}

export default Shop;
