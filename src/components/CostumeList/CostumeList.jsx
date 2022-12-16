import CostumeListItem from '../CostumeListItem/CostumeListItem';

export default function CostumeList({ costumeItems, handleAddToOrder }) {
  const items = costumeItems.map(item =>
    <CostumeListItem
      key={item._id}
      menuItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="MenuList">
      {items}
    </main>
  );
}