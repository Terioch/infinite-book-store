import { useState, useEffect, useContext, createContext } from "react";

export type ScreenSizeModel = {
	screenWidth: number;
};

const ScreenSizeContext = createContext({ screenWidth: null });

export const ScreenSizeProvider = ({ children }) => {
	const [screenWidth, setScreenWidth] = useState(null);

	useEffect(() => {
    setScreenWidth(window.innerWidth);
		window.addEventListener("resize", () => {
			setScreenWidth(window.innerWidth);
		});
	}, []);

	return (
		<ScreenSizeContext.Provider value={{ screenWidth }}>
			{children}
		</ScreenSizeContext.Provider>
	);
};

export const useScreenSize = () => useContext(ScreenSizeContext);
