import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import { MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdb-react-ui-kit';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import './ItemDetailPage.css';

export default function ItemDetailPage({ items, handleAddToOrder, addReview }) {
  const [itemDetail, setItemDetail] = useState({});
  const {itemId} = useParams();
  const item = items.find((item) => item.name === itemId);
  const [newReview, setNewReview] = useState({
    content: '',
    rating: '⭐️⭐️⭐️'
  });

  function handleAddReview(evt) {
    evt.preventDefault();
    addReview(newReview, item);
    setNewReview({
      content: '',
      rating: '⭐️⭐️⭐️'
    });
  }

  useEffect(() => {
    const getItem = async () => {
      const ItemData = await itemsAPI.getById(itemId);
      setItemDetail(ItemData);
    }
    getItem();
  }, [itemId]);

  return (
    <>
      <MDBRow className='mb-3 ItemDetail'>
        <MDBCol lg='4 name'>
          {itemDetail.name}
        </MDBCol>
        <MDBCol lg='4 emoji flex-ctr-ctr'>
          {itemDetail.emoji}
        </MDBCol>
        <MDBCol lg='4 buy'>
          <span>${itemDetail.price}</span>
          <button className="btn-sm" onClick={() => handleAddToOrder(itemDetail._id)}>
            ADD
          </button>
        </MDBCol>
      </MDBRow>
      <form onSubmit={handleAddReview}>
        <MDBRow className='mb-4'>
          
        </MDBRow>
        <MDBInput 
          name='content'
          wrapperClass='mb-4' 
          id='form6Example7' 
          rows={4} 
          label='Submit a review!'
          value={ newReview.content }
          onChange={(evt) => setNewReview({ ...newReview, [evt.target.name]: evt.target.value })}
          required
        />
        <label htmlFor='select'>Rating</label>
        <select
          name='rating'
          value={ newReview.rating }
          onChange={(evt) => setNewReview({ ...newReview, [evt.target.name]: evt.target.value })}
          required
        >
          <option value='⭐️'>⭐️</option>
          <option value='⭐️⭐️'>⭐️⭐️</option>
          <option value='⭐️⭐️⭐️'>⭐️⭐️⭐️</option>
          <option value='⭐️⭐️⭐️⭐️'>⭐️⭐️⭐️⭐️</option>
          <option value='⭐️⭐️⭐️⭐️⭐️'>⭐️⭐️⭐️⭐️⭐️</option>
        </select>
        <MDBBtn className='mb-4' type='submit' block>
          Post Review
        </MDBBtn>
        <MDBRow>
          <h2>Reviews:</h2>
          {items.map((item, idx) => (
            item.reviews === 0 ?
            <p>No reviews yet</p>
            :
          <div>
            <ReviewCard
              item={item}
              key={idx}
              />
          </div>
          ))}
        </MDBRow>
      </form>
    </>
  )
}