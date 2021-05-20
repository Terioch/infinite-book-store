// Product model for use with the Buy SDK library
export interface Image {
	id: string;
	src: string;
}

export interface Variant {
	id: string;
	price: string;
	inventoryQuantity: number;
}

export interface Product {
	id: string;
	title: string;
	description: string;
	images: Image[];
	variants: Variant[];
}
