export const computeProductTotalPrice = (
  productPrice: number,
  descontPercentage: number,
): number => {
  let discountedPrice = 0;
  if (descontPercentage > 0) {
    discountedPrice = productPrice - (productPrice * descontPercentage) / 100;
    return discountedPrice;
  } else {
    return productPrice;
  }
};
