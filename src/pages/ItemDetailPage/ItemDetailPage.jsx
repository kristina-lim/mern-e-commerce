import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import { MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdb-react-ui-kit';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import './ItemDetailPage.css';

export default function ItemDetailPage({ items, handleAddToOrder, addReview }) {
  const [itemDetail, setItemDetail] = useState(null);
  const {itemId} = useParams();
  const [newReview, setNewReview] = useState({
    content: '',
    rating: '⭐️⭐️⭐️'
  });
  
  function handleAddReview(evt, id) {
    evt.preventDefault();
    addReview(newReview, id);
    setNewReview({
      content: '',
      rating: '⭐️⭐️⭐️'
    });
  }

  useEffect(() => {
    function getItem() {
      const item = items.filter(function(i) {
        if (i._id === itemId) return i;
      })
      setItemDetail(item[0]);
    }
    getItem();
  }, [itemId]);

  return (
    <>
      {itemDetail ? 
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
          <form onSubmit={(evt) => handleAddReview(evt, itemDetail._id)}>
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
              Add Review
            </MDBBtn>
          </form>
          <h2>Reviews:</h2>
          {itemDetail.reviews.length === 0 ?
            <p>No reviews yet</p>
           : 
          <div>
            {itemDetail.reviews.map((review, idx) => (
              <ReviewCard
                review={review}
                key={idx}
              />
            ))}
          </div>
          }
        </>
        :
        ""
      }
    </>
  )
}