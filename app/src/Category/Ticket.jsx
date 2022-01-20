import React from "react";
import moment from "moment-timezone";
import { useDispatch } from "react-redux";
import { changeArticle } from "../redux/Action";
import "./Ticket.css";

function Ticket({ article }) {
  const dispatch = useDispatch();
  const [isnew, setIsnew] = React.useState(true);
  function dateDifference(startDate, endDate) {
    let sec = moment(startDate).diff(moment(endDate), "seconds");
    sec = sec < 0 ? sec * -1 : sec;
    if (sec <= 60) {
      return "now";
    }
    let min = moment(startDate).diff(moment(endDate), "minutes");
    min = min < 0 ? min * -1 : min;
    if (min > 45) {
      setIsnew(false);
    }
    if (min <= 60) return min + " mins";
    let hours = moment(startDate).diff(moment(endDate), "hours");
    setIsnew(false);
    hours = hours < 0 ? hours * -1 : hours;
    return hours + " hours";
  }
  const value = React.useMemo(
    () =>
      dateDifference(
        moment(moment().format("H:mm:ss"), "H:mm:ss"),

        moment(article.ts, "H:mm:ss")
      ),
    [article.ts]
  );
  return (
    <div
      className="ticket"
      onClick={() => {
        dispatch(changeArticle(article));
      }}
    >
      {isnew && <div className="new_label">new</div>}

      <img className="ticket_image_url" src={article.imageUrl} alt="" />
      <div className="backgroundcolor"></div>
      <div className="article__bottom">
        <h3 className="article_name">{article.name}</h3>
        <h4 className="article_ts">{value}</h4>
      </div>
    </div>
  );
}

export default Ticket;
