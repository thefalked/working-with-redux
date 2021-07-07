export interface IItemProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IItemProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}