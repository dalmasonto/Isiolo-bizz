import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import Root from './layouts/Root';
import Contact from './pages/Contact';
import About from './pages/About';
import Error404 from './pages/errors/Error404';
import Cart from './pages/shop/Cart';
import Checkout from './pages/shop/Checkout';
import AccountProfile from './pages/account/AccountProfile';
import SignInregister from './pages/auth/SignInregister';
import RecoverPassword from './pages/auth/RecoverPassword';
import Shop from './pages/shop/Shop';
import SingleProduct from './pages/shop/SingleProduct';
import MerchantLayout from './layouts/MerchantLayout';
import AddProduct from './pages/merchant/AddProduct';
import Products from './pages/merchant/Products';
import { ADMIN_BASE_URL } from './config/constants';
import AdminLayout from './layouts/AdminLayout';
import MerchantDashboard from './pages/merchant/MerchantDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import Merchants from './pages/admin/Merchants';
import Categories from './pages/admin/products/Categories';
import ContactForm from './pages/admin/ContactForm';
import Reviews from './pages/admin/Reviews';
import Users from './pages/admin/Users';
import OrderHistory from './pages/merchant/OrderHistory';
import ShopProfile from './pages/account/ShopSettings';
import UpdateProduct from './pages/merchant/UpdateProduct';
import SingleCategory from './pages/shop/categories/SingleCategory';
import SingleMerchant from './pages/shop/SingleMerchant';
import Clients from './pages/admin/Clients';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/merchants/:id/:slug",
        element: <SingleMerchant />,
      },
      {
        path: '/shop/categories/:id/:slug',
        element: <SingleCategory />,
      },
      {
        path: '/shop/products/:id/:slug',
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/account/auth/",
        element: <SignInregister />,
      },
      {
        path: "/account/auth/password-recovery",
        element: <RecoverPassword />,
      },
      {
        path: "/account/profile",
        element: <AccountProfile />,
      },
      {
        path: "/merchant",
        element: <MerchantLayout />,
        children: [
          {
            path: "",
            element: <AccountProfile />,
          },
          {
            path: "settings",
            element: <ShopProfile />,
          },
          {
            path: "dashboard",
            element: <MerchantDashboard />,
          },
          {
            path: "orders",
            element: <OrderHistory />,
          },
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "add-product",
            element: <AddProduct />,
          },
          {
            path: "products/:id/edit",
            element: <UpdateProduct />,
          },
        ]
      },
      {
        path: ADMIN_BASE_URL,
        element: <AdminLayout />,
        children: [
          {
            path: "",
            element: <AccountProfile />,
          },
          {
            path: "dashboard",
            element: <AdminDashboard />,
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "merchants",
            element: <Merchants />,
          },
          {
            path: "clients",
            element: <Clients />,
          },
          {
            path: "categories",
            element: <Categories />,
          },
          {
            path: "contact-form-entries",
            element: <ContactForm />,
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
        ]
      },
    ]
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
