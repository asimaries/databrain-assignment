import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../store/cartSlice";
import { useLocation } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
  const {
    brand,
    category,
    description,
    discountPercentage,
    images,
    price,
    rating,
    stock,
    title,
  } = product;
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  console.log(pathname);
  const addProductToCart = (product: Product) => {
    dispatch(addProduct(product));
  };

  const removeProductFromCart = (product: Product) => {
    dispatch(removeProduct(product.id));
  };

  return (
    <>
      <div className=" flex items-center justify-center space-x-5 transition h-64 group w-[900px] border rounded-md hover:bg-neutral-100">
        <div className="w-60 h-48 overflow-hidden">
          <img
            className="h-full object-contain content-center"
            src={images[1]}
            alt=""
          />
        </div>
        <div className="w-[500px] flex flex-col justify-center space-y-3 p-5 ">
          <h2 className="text-2xl font-bold group-hover:text-blue-500">
            {title}
          </h2>
          <h2 className="text-sm font-semibold">
            {brand} • {category}
          </h2>

          <div className="flex space-x-2">
            <p
              className={` p-1 text-sm font-bold text-white rounded-md  ${
                rating > 2.5 ? "bg-green-600" : "bg-red-600"
              }`}
            >
              ⭐ {rating}
            </p>
            <p className="text-sm p-1 font-bold hover:bg-blue-300 transition  rounded-md   ">
              {stock} available
            </p>
          </div>
          <p className="text-sm">{description}</p>
        </div>
        <div className="w-64">
          <p className="text-4xl font-semibold">$ {price}</p>
          <div className="flex space-x-3">
            <p className="text-md line-through font-semibold text-neutral-500">
              $ {((price * 100) / (100 - discountPercentage)).toFixed(2)}
            </p>
            <p className="text-md font-semibold text-green-700">
              {discountPercentage}% off
            </p>
          </div>
          {pathname == "/" ? (
            <button
              className=" border-none outline-none p-2 m-2 text-blue-500 rounded-md px-4 py-2 hover:text-blue-700 hover:bg-blue-300 "
              onClick={() => addProductToCart(product)}
            >
              <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
            </button>
          ) : pathname == "/cart" ? (
            <button
              className=" border-none outline-none p-2 m-2 text-blue-500 rounded-md px-4 py-2 hover:text-blue-700 hover:bg-blue-300 "
              onClick={() => removeProductFromCart(product)}
            >
              <FontAwesomeIcon icon={faCartShopping} /> Remove from Cart
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default ProductCard;
