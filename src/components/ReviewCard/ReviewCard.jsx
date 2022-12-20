import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function ReviewCard({ review, handleDeleteReview }) {
  console.log(review);
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
        <MDBCardBody>
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
              <MDBBtn color='warning'>
                Edit
              </MDBBtn>
            </MDBCol>
            <MDBCol>
              <MDBBtn color='danger' onClick={() => handleDeleteReview(review._id)}>
                Delete
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </>
  ) 
}