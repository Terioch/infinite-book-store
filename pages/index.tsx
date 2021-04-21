import { useEffect } from "react";
import { client } from "../utils/shopify";
import Components from "../components/Components";
import styles from '../styles/Home.module.css';

export default function Home({ products }) {
  const { Shop } = Components;

  useEffect(() => {
    document.querySelector('body').classList.add(styles.body);
  });

  return (
    <>
      <Shop products={products} />
    </>
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