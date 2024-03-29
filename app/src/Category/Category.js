import React from "react";
import "./Category.css";
import Ticket from "./Ticket";
import { IconButton } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";


function Category({ category }) {
  return (
    <div className="category">
      <div className="header">
        <h3 className="category_name">{category.category_name}</h3>
        <div className="main__system">
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>
      </div>
      <div className="category_articles">
        {category.articls.map((elemnt, index) => (
          <Ticket article={elemnt} />
        ))}
      </div>
    </div>
  );
}

export default Category;
