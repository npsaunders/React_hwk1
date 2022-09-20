function Sentiment(props) {
  return (
    <div id="sentiment">Sentiment Analysis
      <div id="sent">
        <div id="sent_num1">{props.num1}</div>
        <div id="sent_num2">{props.num2}</div>
        <div id="sent_num3">{props.num3}</div>
      </div>
    </div>
  );
}

export default Sentiment;