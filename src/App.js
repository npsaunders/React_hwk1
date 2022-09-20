import AvgRating from './containers/AvgRating.js'
import Reviews from './containers/Reviews.js';
import Sentiment from './containers/Sentiment.js';
import WebSiteVisitors from './containers/WebSiteVisitors.js';

import './App.css';

function App() {
  return (
    <div className="container">
      < AvgRating AvgRating={4.6} />
      <Reviews numReviews={"1,281"} />
      <Sentiment num1={960} num2={122} num3={321} />
      <WebSiteVisitors webSiteVisitors="821" />
    </div>
  );
}

export default App;
