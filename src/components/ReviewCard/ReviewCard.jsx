export default function ReviewCard({ review }) {
  // const date = new Date(review.createdAt);
  // const dateOptions = {
  //   weekday: 'long',
  //   year: 'numeric',
  //   month: 'numeric',
  //   day: 'numeric'
  // }

  return(
    <>
      <div>
        {/* {review.content} */}
      </div>
      <div>
        Rating: {review.rating}
      </div>
      <div>
        Posted by {review.user}
      </div>
      <div>
        {/* Created on {date.toLocaleDateString(undefined, dateOptions)} */}
      </div>
    </>
  ) 
}