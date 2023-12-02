import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./SearchBar";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const cartSIze = useSelector((state: RootState) => state.cart.length);
  const navigate = useNavigate();
  return (
    <>
      <div className="p-2 flex justify-between items-center sticky top-0 h-20 shadow-sm  shadow-neutral-400 bg-white">
        <button className="" onClick={() => navigate("/")}>
          <h1 className="text-5xl font-bold">Fake Store</h1>
        </button>
        <SearchBar />
        <div className="flex items-center">
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Sign In
          </button>
          <button
            className="p-2 m-2 text-blue-500 rounded-md px-4 py-2 hover:text-blue-600 focus:outline-none focus:ring focus:text-blue-300 relative"
            onClick={() => navigate("/cart")}
          >
            <FontAwesomeIcon icon={faCartShopping} size={"2x"} />
            <div className="text-white bg-blue-500 absolute -top-[5px] right-1 text-xs rounded-full px-1">
              {cartSIze}
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
