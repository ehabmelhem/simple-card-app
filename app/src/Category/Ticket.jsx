import React from "react";
import moment from "moment";
import {  useDispatch } from "react-redux";
import { changeArticle } from "../redux/Action";
import "./Ticket.css";
function Ticket({ article }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log(article);
  }, []);
  return (
    <div
      className="ticket"
      onClick={() => {
        dispatch(changeArticle(article));
      }}
    >
      <img className="ticket_image_url" src={article.imageUrl} alt="" />
      <div className="backgroundcolor"></div>
      <div className="article__bottom">
        <h3 className="article_name">{article.name}</h3>
        <h4 className="article_ts">{article.ts}</h4>
      </div>
    </div>
  );
}

export default Ticket;
