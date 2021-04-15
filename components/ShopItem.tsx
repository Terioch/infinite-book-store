import React from "react";
import Link from "next/link";
// import Image from "next/image";
import { Header, Card, Image } from "semantic-ui-react";
import { Product } from "./Shop";
import shopStyles from "../styles/shop.module.css";

interface Props {
  product: Product;
}

const ShopItem: React.FC<Props> = ({ product }) => {
  const { id, images, variants } = product;

  return (
    <Link href={`product/${id}`}>
      <Card color="blue">
        <Card.Content style={{padding: "0"}}>
          <Image 
            className={shopStyles.image}
            src={images[0].src} 
            fluid
          />
        </Card.Content>
        <Card.Content>
          <Header as="h2">£{variants[0].price}</Header>
        </Card.Content>
      </Card>
    </Link>
  );  
}

export default ShopItem;
