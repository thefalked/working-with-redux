import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { addProductToCart } from "../../store/modules/cart/actions";

import { IItemProduct } from "../../store/modules/cart/types";

interface CatalogItemProps {
  product: IItemProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span>{" "}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  );
};

export default CatalogItem;
