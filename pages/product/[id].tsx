import { useState } from 'react';
import { client } from "../../utils/shopify";
import { Product } from '../../components/Shop';
import { Segment, Grid } from "semantic-ui-react";
import Components from "../../components/Components";
import productStyles from "../../styles/product.module.css";

const { Row, Column } = Grid;

interface Props {
  product: Product;
}

const product: React.FC<Props> = ({ product }) => {
  const { ProductImageColumn, ProductInfoColumn } = Components;
  const { images, variants } = product;
  const [image, setImage] = useState<string>(images[0].src);
  const [quantity, setQuantity] = useState<number | string>(1);

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
  }

  // Update quantity on input change
  const handleQuantity = (e: any) => {
    const value = parseInt(e.target.value);
    setQuantity(value > 0 ? value : 1);
  }

  return (
    <Segment padded secondary>
      <Grid container centered stackable>
        <Row columns={2}>
          <Column width={10}>
            <ProductImageColumn 
              product={product} 
              image={image}
              setImage={setImage}
            />
          </Column>
          <Column width={6}>
            <Row>
              <ProductInfoColumn 
                product={product}
                productStyles={productStyles}
                quantity={quantity}
                handleQuantity={handleQuantity}
                addToCart={addToCart}
              />
            </Row>
          </Column>
        </Row>
      </Grid>
    </Segment>
  );
}

export const getServerSideProps = async (context: any) => {
  // Fetch single product from Shopify API
  const product = await client.product.fetch(context.params.id);

  return {
    props: {
      product: JSON.parse(JSON.stringify(product))
    }
  }
}

// export const getStaticPaths = async () => {
//   // Generate paths for each product by id
//   const products = await client.product.fetchAll();
//   const idList: Array<number> = products.map((p: any) => p.id);
//   const paths = idList.map(id => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false
//   }
// }

export default product;