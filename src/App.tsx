import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import Error from "./components/Error";
import OrderForm from "./components/OrderForm";
import OrderSummary from "./components/OrderSummary";

const Layout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order-form",
        element: <OrderForm />,
      },
      {
        path: "/order-summary",
        element: <OrderSummary />,
      },
    ],
  },
]);

function App() {
  return (
    <main className="w-[1366px] m-auto">
      <RouterProvider router={router} />
    </main>
  );
}
export default App;
