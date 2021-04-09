import Client from "shopify-buy";

// Initialize a client to return content in the store's primary
export const client = Client.buildClient({
  domain: "book-store-55.myshopify.com",
  storefrontAccessToken: "b818f747b09c5737c1aa9f6e30cbcebc"
});
