import { useState } from 'react';
import {
  MDBCardBody,
  MDBTextArea,
  MDBBtn
} from 'mdb-react-ui-kit';


export default function UpdateReviewForm({ review, reviews, showCard, setShowCard, itemDetail, handleUpdateReview }) {
  const reviewId  = review._id;
  const updatedReview = reviews.find((review) => review._id === reviewId);
  const [reviewFormData, setReviewFormData] = useState({
    rating: '',
    content: ''
  });

  if (!updatedReview) return null;
  
  function handleReviewSubmit(evt) {
    evt.preventDefault();
    setShowCard(!showCard);
    handleUpdateReview(reviewFormData, itemDetail._id, reviewId);
  }

  return (
    <form onSubmit={handleReviewSubmit}>
        <MDBCardBody>
          <label>Edit review:</label>
          <MDBTextArea name='content' type='text' rows={4} value={reviewFormData.content} onChange={(evt) => setReviewFormData({ content: evt.target.value })} />
          <MDBBtn type='submit'>Edit Review</MDBBtn>
        </MDBCardBody>
    </form>
  )
}
