import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home/Home"
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss"
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Orders from "./pages/orders/Orders";
import Dealers from "./pages/dealers/Dealers";


const queryClient = new QueryClient();
function App() {

  const Layout = () =>{
    return(
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'/',
        element: <Home />,
      },
      {
        path:'/users',
        element: <Users />,
      },
      {
        path:'/products',
        element: <Products />,
      },
      {
        path:'/users/:id',
        element: <User />,
      },
      {
        path:'/products/:id',
        element: <Product />,
      },
      {
        path:'/orders',
        element:<Orders />
      },
      {
        path:'/orders/:id',
        element: <></>,
      },
      {
        path:'/dealers',
        element:<Dealers />,
      },
      // {
      //   path:'/dealers/:id',
      //   element:<Dealer />
      // },
    ]
  },
  {
    path:'/login',
    element:<Login />,
  }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
