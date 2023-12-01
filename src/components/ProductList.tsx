import { useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { addProducts } from "../store/productSlice";

const ProductList = ({ products }: { products: Product[] }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const getCategories = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios(import.meta.env.VITE_BASE_URL);
      dispatch(addProducts(data.products));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  if (error) return <h3>{error}</h3>;

  return (
    <>
      <div>
        {isLoading ? <h3> Loading......</h3> : null}
        {products.length > 0
          ? products.map((productItem: Product) => {
              // console.log(productItem);
              return <ProductCard product={productItem} key={productItem.id} />;
            })
          : null}
      </div>
    </>
  );
};
export default ProductList;
