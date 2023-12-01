import { useSelector } from "react-redux";
import { RootState } from "../store";
import ProductList from "./ProductList";

const OrderSummary = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const orderDetail = useSelector((state: RootState) => state.orderDetail);
  const orderSummary = { cart, orderDetail };
  // console.log(orderSummary);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Order Details</h1>
      <div className="flex space-x-10">
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Order Information</h2>
          <ul>
            {Object.entries(orderDetail).map(([key, value]) => (
              <li key={key} className="mb-2">
                <span className="font-bold">{key}:</span> {value}
              </li>
            ))}
          </ul>
        </div>

        <ProductList products={cart} />
      </div>
    </div>
  );
};

export default OrderSummary;
