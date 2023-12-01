import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../store/productSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const getSuggestions = async () => {
    if (query == "") return;
    axios("https://dummyjson.com/products/search", {
      params: {
        q: query,
        limit: 10,
      },
    }).then(({ data }) => {
      // console.log(data);
      const searchesList = data.products.map(
        (product: Product) => product.title
      );
      setSuggestions(searchesList);
    });
  };

  const getProductsByQuery = async () => {
    if (query == "") return;
    axios("https://dummyjson.com/products/search", {
      params: {
        q: query,
        limit: 10,
      },
    }).then(({ data }) => {
      dispatch(addProducts(data.products));
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestions();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <>
      <div className="h-10 flex flex-col">
        <div className="flex rounded-full border focus-within:border-blue-300">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search for products..."
            className="h-10 w-96 text-sm px-4 rounded-l-full bg-neutral-100 outline-none focus-within:bg-white"
            onBlur={() => setSuggestions([])}
          />
          <button
            className="w-16 grid place-items-center rounded-r-full bg-blue-400 hover:bg-blue-500 text-white"
            onClick={() => {
              getProductsByQuery();
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        {suggestions.length > 0 ? (
          <div className=" bg-white  rounded-xl shadow-neutral-300 shadow-md w-full  ">
            <div className="flex flex-col p-1">
              <ul>
                {suggestions.length
                  ? suggestions.map((data, index) => (
                      <li
                        key={index}
                        className="flex items-center hover:bg-neutral-200 rounded-md px-2 py-1"
                      >
                        {data}
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SearchBar;
