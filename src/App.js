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
        path: '/shop/products/:slug',
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
