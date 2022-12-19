import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import { useNavigate } from 'react-router-dom';
import CostumeList from '../../components/CostumeList/CostumeList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import './NewOrderPage.css'

export default function NewOrderPage({ user, setUser }) {
  const [costumeItems, setCostumeItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();
  
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setCostumeItems(items);
    }
    getItems();

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

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

  return (
    <div className='shop-container'>
    <div className="shop-row">
      <div className="shop-col">
        <h2>Category</h2>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
      </div>
      <div className="shop-col">
        <div className="shop-costumes">
          <CostumeList
            costumeItems={costumeItems.filter(item => item.category.name === activeCat)}
            handleAddToOrder={handleAddToOrder}
          />
        </div>
        <div>
        <OrderDetail
          order={cart}
          handleChangeQty={handleChangeQty}
          handleCheckout={handleCheckout}
        />
        </div>
      </div>
    </div>
  </div>
    // <main className="NewOrderPage">
    //   <aside>
    //     <CategoryList
    //       categories={categoriesRef.current}
    //       activeCat={activeCat}
    //       setActiveCat={setActiveCat}
    //     />
    //     {/* <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
    //     <UserLogOut user={user} setUser={setUser} /> */}
    //   </aside>
    //   <CostumeList
    //     costumeItems={costumeItems.filter(item => item.category.name === activeCat)}
    //     handleAddToOrder={handleAddToOrder}
    //   />
    //   <OrderDetail
    //     order={cart}
    //     handleChangeQty={handleChangeQty}
    //     handleCheckout={handleCheckout}
    //   />
    // </main>
  );
}
