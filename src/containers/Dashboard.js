// The dashboard contains all the components of the app and passes all the prop objects to the subcomponents
import Menu from './Menu.js';
import AvgRating from './AvgRating.js';
import Reviews from './Reviews.js';
import Sentiment from './Sentiment.js';
import WebSiteVisitors from './WebSiteVisitors.js';


function Dashboard() {
  return (<div className="container">
    < AvgRating AvgRating={4.6} />
    <Reviews numReviews={"1,281"} />
    <Sentiment num1={960} num2={122} num3={321} />
    <WebSiteVisitors webSiteVisitors="821" />
    <Menu />
  </div>
  );
}

export default Dashboard;