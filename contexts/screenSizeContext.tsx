import { useState, useEffect, useContext, createContext } from "react";

export type ScreenSizeModel = {
	screenWidth: number;
};

const ScreenSizeContext = createContext({
	screenWidth: null,
	screenHeight: null,
});

export const ScreenSizeProvider = ({ children }) => {
	const [screenWidth, setScreenWidth] = useState(null);
	const [screenHeight, setScreenHeight] = useState(null);

	useEffect(() => {
		setScreenWidth(window.innerWidth);
		setScreenHeight(window.innerHeight);
		window.addEventListener("resize", () => {
			setScreenWidth(window.innerWidth);
			setScreenHeight(window.innerHeight);
		});
	}, []);

	return (
		<ScreenSizeContext.Provider value={{ screenWidth, screenHeight }}>
			{children}
		</ScreenSizeContext.Provider>
	);
};

export const useScreenSize = () => useContext(ScreenSizeContext);
