import OrderListItem from '../OrderListItem/OrderListItem';
import './OrderList.css';

export default function OrderList({ orders, activeOrder, setActiveOrder }) {

  const orderList = orders.map(order => 
  <OrderListItem
    order={order}
    activeOrder={activeOrder}
    setActiveOrder={setActiveOrder}
    key={order.id}
  />);

  return (
    <main className={`OrderList ${orders.length ? '' : 'no-orders'}`}>
      {orderList}
    </main>
  );
}