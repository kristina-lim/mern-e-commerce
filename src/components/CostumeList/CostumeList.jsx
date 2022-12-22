import CostumeListItem from '../CostumeListItem/CostumeListItem';
import './CostumeList.css';

export default function CostumeList({ costumeItems, handleAddToOrder }) {
  const items = costumeItems.map(item =>
    <CostumeListItem
      key={item._id}
      costumeItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className='CostumeList'>
      {items}
    </main>
  );
}