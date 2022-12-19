import { MDBBtn } from 'mdb-react-ui-kit';
import './CategoryList.css';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map(cat =>
    <MDBBtn
      color='warning'
      key={cat}
      className={cat === activeCat ? 'active' : ''}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </MDBBtn>
  );

  return (
    <ul className="CategoryList">
      {cats}
    </ul>
  );
}
