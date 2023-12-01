function sortByRelevance(products: Product[]): Product[] {
  return products.slice().sort((a, b) => a.id - b.id);
}

function sortByPopularity(products: Product[]): Product[] {
  return products.slice().sort((a, b) => a.rating - b.rating);
}
function sortByPriceLowtoHigh(products: Product[]): Product[] {
  return products.slice().sort((a, b) => a.price - b.price);
}
function sortByPriceHightoLow(products: Product[]): Product[] {
  return products.slice().sort((a, b) => b.price - a.price);
}
function sortByDiscountPercentage(products: Product[]): Product[] {
  return products
    .slice()
    .sort((a, b) => b.discountPercentage - a.discountPercentage);
}

export {
  sortByRelevance,
  sortByPopularity,
  sortByPriceLowtoHigh,
  sortByPriceHightoLow,
  sortByDiscountPercentage,
};
