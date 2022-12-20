import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import ItemDetailPage from '../ItemDetailPage/ItemDetailPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
// import Footer from '../../components/Footer/Footer';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(null);
  const [showCart, setShowCart] = useState([]);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setItems(items);
    }
    getItems();
  }, []);

  useEffect(function() {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, [user]);

  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  async function addReview(review, item) {
    const returnedItem = await itemsAPI.createReview(review, item);
    setReviews([...returnedItem.reviews]);
  }

  async function handleDeleteReview(itemId, reviewId) {
    await itemsAPI.deleteReview(itemId, reviewId);
    const remainingReviews = reviews.filter(review => review._id !== reviewId);
    setReviews(remainingReviews);
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} order={cart} showCart={showCart} setShowCart={setShowCart} />
          <Routes>
            {/* route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} handleAddToOrder={handleAddToOrder} />} />
            <Route path="/api/items/:itemId" element={<ItemDetailPage user={user} setUser={setUser} items={items} setItems={setItems} reviews={reviews} addReview={addReview} handleAddToOrder={handleAddToOrder} handleDeleteReview={handleDeleteReview} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
          {showCart &&
            <OrderDetail order={cart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout} />
          }
          {/* <Footer /> */}
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
