// Initialize interface for an individual product
interface ImageNode {
	id: string;
	src: string;
}

interface VariantNode {
	id: string;
	price: string;
}

export interface Image {
	node: ImageNode;
}

export interface Variant {
	node: VariantNode;
}

interface Images {
	edges: Array<Image>;
}

interface Variants {
	edges: Array<Variant>;
}

export interface Product {
	id: string;
	title: string;
	description: string;
	images: Images;
	variants: Variants;
}
