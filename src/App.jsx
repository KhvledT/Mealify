import React from 'react';
import { useLocation , createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home.jsx';
import Chefs from './pages/Chefs/Chefs.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Menu from './pages/Menu/Menu.jsx';
import Order from './pages/Order/Order.jsx';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import CategoryMenuPage from './pages/Menu/CategoryMenuPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}


function App() {


  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/chefs', element: <Chefs /> },
        { path: '/gallery', element: <Gallery /> },
        { path: '/menu', element: <Menu /> },
        { path: '/menu/pizza', element: <CategoryMenuPage category="Pizza" /> },
        { path: '/menu/burger', element: <CategoryMenuPage category="Burger" /> },
        { path: '/menu/chicken', element: <CategoryMenuPage category="Chicken" /> },
        { path: '/menu/grill', element: <CategoryMenuPage category="Grill" /> },
        { path: '/menu/salad', element: <CategoryMenuPage category="Salad" /> },
        { path: '/menu/pasta', element: <CategoryMenuPage category="Pasta" /> },
        { path: '/menu/sushi', element: <CategoryMenuPage category="Sushi" /> },
        { path: '/menu/dessert', element: <CategoryMenuPage category="Dessert" /> },
        { path: '/menu/drinks', element: <CategoryMenuPage category="Drinks" /> },
        { path: '/contact', element: <Contact /> },
        { path: '/order', element: <Order /> },
    ]
    }
  ]);
  return (
      <>
      <RouterProvider router={routes} />
      </>
  );
}

export default App;
