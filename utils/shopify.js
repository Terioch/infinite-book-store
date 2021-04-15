import Client from "shopify-buy";

// Initialize a client to return content in the store's primary
export const client = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
});
