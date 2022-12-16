export default function CostumeListItem({ costumeItem, handleAddToOrder }) {
  return (
    <div className="CostumeListItem">
      <div className="emoji flex-ctr-ctr">{costumeItem.emoji}</div>
      <div className="name">{costumeItem.name}</div>
      <div className="buy">
        <span>${costumeItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(costumeItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}