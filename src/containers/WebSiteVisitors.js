import WebSiteVisitorsGraph from "./WebSiteVisitorsGraph";
function WebSiteVisitors(props) {
  return (
    <div id="webSiteVisitors">
      Web Site Visitors
      <div id="numSiteVisitors">
        {props.webSiteVisitors}
      </div>
      <WebSiteVisitorsGraph />
    </div>
  );
}

export default WebSiteVisitors;