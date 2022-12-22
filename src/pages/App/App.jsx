import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import ItemDetailPage from '../ItemDetailPage/ItemDetailPage';
import UpdateReviewCard from '../../components/UpdateReviewCard/UpdateReviewCard';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

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

  async function handleUpdateReview(reviewFormData, itemId, reviewId) {
    const updatedItems = await itemsAPI.updateReview(reviewFormData, itemId, reviewId);
    setItems(updatedItems);
  }

  return (
    <main className='App'>
      { user ?
        <>
          <NavBar user={user} setUser={setUser} order={cart} showCart={showCart} setShowCart={setShowCart} />
          <Routes>
            {/* route components in here */}
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/orders/new' element={<NewOrderPage user={user} setUser={setUser} cart={cart} handleAddToOrder={handleAddToOrder} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout} />} />
            <Route path='/api/items/:itemId' element={<ItemDetailPage user={user} setUser={setUser} cart={cart} items={items} setItems={setItems} reviews={reviews} addReview={addReview} handleAddToOrder={handleAddToOrder} handleDeleteReview={handleDeleteReview} handleUpdateReview={handleUpdateReview} />} />
            <Route path='/api/items/:itemId/reviews/:reviewId' element={<UpdateReviewCard items={items} reviews={reviews} handleUpdateReview={handleUpdateReview} />} />
            <Route path='/orders' element={<OrderHistoryPage user={user} setUser={setUser} />} />
            <Route path='/*' element={<Navigate to='/orders/new' />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
