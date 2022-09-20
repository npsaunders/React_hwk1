// Number of Reviews component that has 1 property show the number of reviews
function Reviews(props) {
  return (
    <div id="reviews">
      Reviews
      <div id="num-reviews">{props.numReviews}</div>
    </div>
  )
}

export default Reviews;