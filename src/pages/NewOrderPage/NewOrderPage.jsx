import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import { Link } from 'react-router-dom';
import CostumeList from '../../components/CostumeList/CostumeList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import './NewOrderPage.css'

export default function NewOrderPage({ user, setUser, cart, handleAddToOrder, handleChangeQty, handleCheckout }) {
  const [costumeItems, setCostumeItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);
  
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setCostumeItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
  }, []);

  return (
    <main className='NewOrderPage'>
      <aside>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to='orders' className='buton btn-sm'>PREVIOUS ORDERS</Link>
      </aside>
      <CostumeList
        costumeItems={costumeItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
    // <div className='shop-container'>
    // <div className="shop-row">
    //   <div className="shop-col">
    //     <h2>Category</h2>
    //     <CategoryList
    //       categories={categoriesRef.current}
    //       activeCat={activeCat}
    //       setActiveCat={setActiveCat}
    //     />
    //     <Link to='/orders' className='button btn-sm'>PREVIOUS ORDERS</Link>
    //   </div>
    //   <div className="shop-col">
    //     <div className="shop-costumes">
    //       <CostumeList
    //         costumeItems={costumeItems.filter(item => item.category.name === activeCat)}
    //         handleAddToOrder={handleAddToOrder}
    //       />
    //     </div>
    //     <div className='order-row'>
    //       <div className='order-col'></div>
    //         <OrderDetail
    //           order={cart}
    //           handleChangeQty={handleChangeQty}
    //           handleCheckout={handleCheckout}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
