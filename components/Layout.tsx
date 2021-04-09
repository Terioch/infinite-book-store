import React from 'react';
import { Container } from "semantic-ui-react";
import Components from "./Components";

const Layout: React.FC = ({ children }) => {
  const { Meta, Nav, Footer } = Components;
  const { title, description, keywords } = metaData;

  return (
    <React.Fragment>
      <Meta 
        title={title} 
        description={description}
        keywords={keywords}
      />
      <main>
        <Nav />
        <Container>
          {children}
        </Container>
        <Footer />
      </main>
    </React.Fragment>
  );
}

const metaData = {
  title: "Book Store",
  description: "Ecommerce site selling books",
  keywords: "Books, ecommerce, shopify, reading"
};

export default Layout;