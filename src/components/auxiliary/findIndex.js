export const findIndex = (products, id) => {
  const index = products.findIndex(p => p.id === id);
  return index;
};
