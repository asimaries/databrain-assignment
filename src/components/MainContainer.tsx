import { useSelector } from "react-redux";
import { RootState } from "../store";
import NavBar from "./NavBar";
import ProductList from "./ProductList";

const MainContainer = () => {
  const products = useSelector((state: RootState) => state.products);

  return (
    <div className="flex space-x-20 justify-center">
      <NavBar />
      <ProductList products={products} />
    </div>
  );
};

export default MainContainer;
