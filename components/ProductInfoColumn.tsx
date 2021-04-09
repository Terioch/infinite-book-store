import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Product } from "./Shop";
import { Card, Header, List, Input, Icon } from "semantic-ui-react";

interface ProductStyles {
  [key: string]: string;
}

interface Props {
  product: Product;
  productStyles: ProductStyles;
  quantity: number | string;
  updateQuantity: (e: any) => void;
  addToCart: () => Promise<void>;
}

const { Content } = Card;

const ProductInfoColumn: React.FC<Props> = ({ 
  product, 
  productStyles,
  quantity,
  updateQuantity,
  addToCart
}) => {
  const { title, description, variants } = product;

  return (
    <>
      <Card fluid color="teal">
        <Content>
          <Header as="h2">{title}</Header>
        </Content>
        <Content>
          {description}
        </Content>
      </Card>
      <Card 
        className={productStyles.checkout} 
        onClick={() => addToCart()}
        raised
      >
        <Content>
          <List link relaxed>
            <List.Item>
              <Header>
                Add To Cart
                <Icon 
                  name="add to cart" 
                  color="teal" 
                  style={{ marginLeft: ".5rem" }}
                />
              </Header>
              <Header>£{variants[0].price}</Header>
            </List.Item>
          </List>
        </Content>
      </Card>
      <Input 
        label="Quantity"
        type="number" 
        value={quantity}
        onChange={(e: any) => updateQuantity(e)}
      />
    </>
  );
}

export default ProductInfoColumn;