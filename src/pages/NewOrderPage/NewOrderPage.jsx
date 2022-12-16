import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
// import * as ordersAPI from '../../utilities/orders-api';
// import './NewOrderPage.css';
// import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
// import MenuList from '../../components/MenuList/MenuList';
// import CategoryList from '../../components/CategoryList/CategoryList';
// import OrderDetail from '../../components/OrderDetail/OrderDetail';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage() {
  const [costumeItems, setCostumeItems] = useState([]);
  const categoriesRef = useRef([]);
  
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setCostumeItems(items);
    }
    getItems();
  }, []);

  return (
    <h1>NewOrderPage</h1>
  );
}
