import { useState } from 'react';
import { client } from "../../utils/shopify";
import { Product } from '../../components/Shop';
import { 
  Segment, 
  Card, 
  Image, 
  Grid,
  List,
  Header,
  Icon,
  Input
} from "semantic-ui-react";
import productStyles from "../../styles/product.module.css";

const { Row, Column } = Grid;
const { Content } = Card;

interface Props {
  product: Product;
}

const product: React.FC<Props> = ({ product }) => {
  const { title, images, description, variants } = product;
  const [image, setImage] = useState<string>(images[0].src);
  const [quantity, setQuantity] = useState(1);

  // Implement product checkout
  const addToCart = async () => {
    let checkoutId = sessionStorage.getItem("checkoutId");  

    // Create new checkout if checkoutId was not fetched from local storage
    if (!checkoutId) {
      const checkout = await client.checkout.create();
      checkoutId = checkout.id;
    }

    sessionStorage.setItem("checkoutId", checkoutId); // Set item within local storage

    // Add line items to checkout cart
    const cart = await client.checkout.addLineItems(checkoutId, [{
      variantId: variants[0].id,
      quantity,
    }]);

    sessionStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }

  return (
    <Segment padded secondary>
      <Grid container centered stackable>
        <Row columns={2}>
          <Column width={10}>
            <Row>
              <Image src={image} fluid />
            </Row>
            <Row>
              <List horizontal divided style={{ marginTop: "1rem" }}>
                {product.images.map(image => (
                  <List.Item key={image.id}>
                    <Image 
                      size={"small"} 
                      src={image.src}
                      onClick={() => setImage(image.src)}
                    />
                  </List.Item>
                ))}
              </List>
            </Row>
          </Column>
          <Column width={6}>
            <Row>
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
                onChange={(e: any) => setQuantity(e.target.value)}
              />
            </Row>
          </Column>
        </Row>
      </Grid>
    </Segment>
  );
}

export const getStaticProps = async (context: any) => {
  // Fetch single product from Shopify API
  const product = await client.product.fetch(context.params.id);

  return {
    props: {
      product: JSON.parse(JSON.stringify(product))
    }
  }
}

export const getStaticPaths = async () => {
  // Generate paths for each product by id
  const products = await client.product.fetchAll();
  const idList: Array<number> = products.map((p: any) => p.id);
  const paths = idList.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  }
}

export default product;