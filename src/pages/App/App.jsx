import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as itemsAPI from '../../utilities/items-api';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import ItemDetailPage from '../ItemDetailPage/ItemDetailPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
// import Footer from '../../components/Footer/Footer';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [items, setItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setItems(items);
    }
    getItems();
  }, []);

  async function addReview(review, item) {
    const newReview = await itemsAPI.createReview(review, item);
    setReviews([...reviews, newReview]);
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/api/items/:itemId" element={<ItemDetailPage user={user} setUser={setUser} items={items} setItems={setItems} reviews={reviews} addReview={addReview} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
          {/* <Footer /> */}
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
