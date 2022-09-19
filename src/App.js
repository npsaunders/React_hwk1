import AvgRating from './containers/AvgRating.js'
import Reviews from './containers/Reviews.js';
import './App.css';

function App() {
  return (
    <div className="container">
      < AvgRating AvgRating={4.6} />
      <Reviews numReviews={1281} />
    </div>
  );
}

export default App;
