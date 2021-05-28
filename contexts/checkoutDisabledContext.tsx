import { useState, useEffect, useContext, createContext } from "react";

const CheckoutDisabledContext = createContext({
	checkoutDisabled: true,
	handleCheckoutDisabled: (): void => {},
});

export const CheckoutDisabledProvider: React.FC = ({ children }) => {
	const [checkoutDisabled, setCheckoutDisabled] = useState(true);

	useEffect(() => {
		handleCheckoutDisabled();
	}, []);

	// Set checkout disabled state based on whether cart items exist
	const handleCheckoutDisabled = () => {
		const cart = JSON.parse(localStorage.getItem("cart"));
		if (cart) {
			const { length } = cart.lineItems;
			setCheckoutDisabled(length > 0 ? false : true);
		}
	};

	return (
		<CheckoutDisabledContext.Provider
			value={{ checkoutDisabled, handleCheckoutDisabled }}
		>
			{children}
		</CheckoutDisabledContext.Provider>
	);
};

export const useCheckoutDisabled = () =>
	useContext(CheckoutDisabledContext);
