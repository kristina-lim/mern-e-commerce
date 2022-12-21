import React from 'react';
import { useState } from 'react';
import UpdateReviewCard from '../UpdateReviewCard/UpdateReviewCard';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import './ReviewCard.css';

export default function ReviewCard({ review, reviews, itemDetail, handleDeleteReview, handleUpdateReview }) {
  const [showCard, setShowCard] = useState(false);
  const [currentReview, setCurrentReview] = useState(review);
  const date = new Date(review.createdAt);
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }
  
  return(
    <>
      <MDBCard>
        <MDBCardBody className='reviewCard'>
          <MDBCardTitle>{review.user}</MDBCardTitle>
          <MDBCardText>
            Rating: {review.rating}
          </MDBCardText>
          <MDBCardText>
            {review.content}
          </MDBCardText>
          <MDBCardText>
            Created on {date.toLocaleDateString(undefined, dateOptions)}
          </MDBCardText>
          <MDBRow>
            <MDBCol>
              <MDBBtn color='warning' onClick={() => setShowCard(!showCard)}>
                Edit
              </MDBBtn>
              { showCard ?
                <UpdateReviewCard 
                  review={review}
                  reviews={reviews}
                  itemDetail={itemDetail}
                  showCard={showCard}
                  setShowCard={setShowCard}
                  handleUpdateReview={handleUpdateReview}
                  setCurrentReview={setCurrentReview}
                />
                :
                <>
                </>
              }
            </MDBCol>
            <MDBCol>
              <MDBBtn color='danger' onClick={() => handleDeleteReview(itemDetail._id, review._id)}>
                Delete 
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </>
  ) 
}