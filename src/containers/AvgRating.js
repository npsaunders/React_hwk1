// Average Rating Component. Uses 1 prop that displays the value
function AvgRating(props) {
  return (
    <div id="avgRating">
      Average Rating
      < div id="avg_rating" >{props.AvgRating}</div >
    </div>
  )
}

export default AvgRating;