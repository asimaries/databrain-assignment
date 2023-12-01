import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts, sortProducts } from "../store/productSlice";

const NavBar = () => {
  const [category, setCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const getCategories = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios(
        import.meta.env.VITE_BASE_URL + "categories"
      );
      setCategories(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  const getProductsCategoryWise = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}category/${category}`,
        {
          params: {
            limit: 5,
          },
        }
      );
      dispatch(addProducts(data.products));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      getProductsCategoryWise();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [category]);
  // if (error) return <h3>{error}</h3>;

  return (
    <>
      <div className="flex flex-col w-[200px] h-full p-1">
        <div>
          <h3 className="text-lg font-semibold">Sort By:</h3>
          <ul className="space-y-[2px]">
            <li
              className="text-sm cursor-pointer hover:bg-neutral-200 border"
              onClick={() => {
                dispatch(sortProducts("sortByRelevance"));
              }}
            >
              Relevance
            </li>
            <li
              className="text-sm cursor-pointer "
              onClick={() => {
                dispatch(sortProducts("sortByPopularity"));
              }}
            >
              Popularity
            </li>
            <li
              className="text-sm cursor-pointer "
              onClick={() => {
                dispatch(sortProducts("sortByPriceLowtoHigh"));
              }}
            >
              Price -- Low to High
            </li>
            <li
              className="text-sm cursor-pointer "
              onClick={() => {
                dispatch(sortProducts("sortByPriceHightoLow"));
              }}
            >
              Price -- High to Low
            </li>
            <li
              className="text-sm cursor-pointer "
              onClick={() => {
                dispatch(sortProducts("sortByDiscountPercentage"));
              }}
            >
              Discount %
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Categories:</h3>
          {isLoading ? <h3> Loading......</h3> : null}
          <ul className="space-y-[2px]">
            {categories.map((category: string) => {
              return (
                <li
                  className="text-sm cursor-pointer "
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
