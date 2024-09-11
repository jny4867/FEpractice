import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    errorElement: <div>Page Not Found</div>
},
{
  path: "/product,",
  element: <div>Product</div>
}
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
