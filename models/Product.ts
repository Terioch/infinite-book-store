// Initialize interface for an individual product
interface Img {
	id: string;
	src: string;
}

interface Variant {
	price: string;
}

interface Product {
	id: string;
	title: string;
	description: string;
	images: Array<Img>;
	variants: Variant;
}
