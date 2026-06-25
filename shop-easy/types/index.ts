export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
