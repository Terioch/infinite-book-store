import React from "react";
import { client } from "../utils/shopify";
import {  } from "semantic-ui-react";
import Components from "../components/Components";
import styles from '../styles/Home.module.css';

export default function Home({ products }) {
  const { Shop } = Components;

  return (
    <React.Fragment>
      <Shop products={products} />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  // Fetch all products from Shopify API
  const products = await client.product.fetchAll();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  };
}