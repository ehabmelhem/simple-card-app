import React from 'react'
import "./Category.css";
import Ticket from './Ticket';
function Category({category}) {
    return (
        <div className="category">
            <h3 className="category_name">{category.category_name}</h3>
            <div className="category_articles">
            {
                category.articls.map((elemnt,index)=>(
                    <Ticket article={elemnt}/>
                ))
            }
            </div>
        </div>
    )
}

export default Category
