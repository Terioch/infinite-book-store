require('dotenv').config();

module.exports = {
  env: {
    FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    SHOPIFY_DOMAIN: "book-store-55.myshopify.com",
    SHOPIFY_TOKEN: "b818f747b09c5737c1aa9f6e30cbcebc"
  }
}