import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Product from "./pages/Product";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";
const router = createBrowserRouter([
  {
  path: "/",
  element: <Root />,
  errorElement: <NotFound />,
  children: [
  { index: true, element: <Home /> },
  { path: "/product", element: <Product /> },
  { path: "/product/:productId", element: <ProductInfo /> },
  ],
  },
  ]);
  const App = () => {
  return <RouterProvider router={router} />;
  };

export default App;
