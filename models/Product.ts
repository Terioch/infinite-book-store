// Initialize interface for an individual product
interface ImageNode {
	id: string;
	src: string;
}

interface VariantNode {
	price: string;
}

interface VariantEdge {
	node: VariantNode;
}

interface Images {
	edges: Array<ImageEdge>;
}

interface Variants {
	edges: Array<VariantEdge>;
}

interface ProductNode {
	id: string;
	title: string;
	description: string;
	images: Images;
	variants: Variants;
}

export interface Product {
	node: ProductNode;
}
