import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  return (
    <div className="flex">
      <ProductList products={products} />
      <div className="p-2">
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => {
            navigate("/order-form");
          }}
        >
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};
export default Cart;
