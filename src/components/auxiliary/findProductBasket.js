export const findProductToBasket = (idProductsBasket, productId) => {
  return idProductsBasket.some(id => id === productId);
};
