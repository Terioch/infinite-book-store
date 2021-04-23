import React from "react";
import { Container } from "semantic-ui-react";
import Components from "./Components";
import layoutStyles from "../styles/Layout.module.css";

const Layout: React.FC = ({ children }) => {
	const { main } = layoutStyles;
	const { Meta, Nav, Footer } = Components;
	const { title, description, keywords } = metaData;

	return (
		<>
			<Meta title={title} description={description} keywords={keywords} />
			<main className={main}>
				<Nav />
				<Container>{children}</Container>
				<Footer />
			</main>
		</>
	);
};

const metaData = {
	title: "Book Store",
	description: "Ecommerce site selling books",
	keywords: "Books, ecommerce, shopify, reading",
};

export default Layout;
