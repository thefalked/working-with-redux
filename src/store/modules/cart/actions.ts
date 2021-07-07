import { IItemProduct } from "./types";

export function addProductToCart(product: IItemProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    }
  }
}
