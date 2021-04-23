import Router from "next/router";

// Retrieve items within the cart and redirect user to the checkout page
const checkoutItems = () => {
	const cart = JSON.parse(sessionStorage.getItem("cart"));
	cart && Router.replace(cart.webUrl);
};

export default checkoutItems;
