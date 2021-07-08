import { IItemProduct } from "./types";

export function addProductToCartRequest(product: IItemProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART_REQUEST",
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IItemProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART_SUCCESS",
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    type: "ADD_PRODUCT_TO_CART_FAILURE",
    payload: {
      productId,
    },
  };
}
