import React from 'react'
import moment from "moment"
import "./Ticket.css"
function Ticket({article}) {
    React.useEffect(()=>{
        console.log(article);
    },[])
    return (
        <div className="ticket">
            <img className="ticket_image_url" src={article.imageUrl} alt="" />
            <div className="backgroundcolor"></div>
            <div className="article__bottom">
                <h3 className="article_name">
                    {
                        article.name
                    }
                </h3>
                <h4 className="article_ts">
                    {
                        article.ts
                    }
                </h4>
            </div>
        </div>
    )
}

export default Ticket
