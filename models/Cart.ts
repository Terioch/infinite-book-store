interface Image {
	src: string;
}

interface Variant {
	price: string;
	image: Image;
}

export interface LineItem {
	id: string;
	title: string;
	quantity: number;
	variant: Variant;
}

export interface Cart {
	lineItems: Array<LineItem>;
}
