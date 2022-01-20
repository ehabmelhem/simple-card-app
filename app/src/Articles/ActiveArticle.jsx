import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import { changeArticle,deleteArticle } from "../redux/Action";
import "./ActiveArticle.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function ActiveArticle() {
  const [screen, setScreen] = React.useState(0);
  const activeArticle = useSelector(
    (state) => state.articleState.activeArticle
  );
  const dispatch = useDispatch();
  if (activeArticle) {
    return (
      <div className="active_article">
          <div className="right_side" onClick={()=>{
              if(screen+1<activeArticle.screens.length){
                setScreen(screen+1)
              }
          }}></div>
          <div className="left_side" onClick={()=>{
              if(screen>0){
                setScreen(screen-1)
              }
          }}></div>
        <div className="screens_slider">
          {activeArticle.screens.map((item, index) => {
            return (
              <div
                className={index <= screen ? "screen screen__active" : "screen"}
                onClick={() => {
                  setScreen(index);
                }}
              ></div>
            );
          })}
          <div className="leave">
            <IconButton
              onClick={() => {
                dispatch(changeArticle(null));
              }}
            >
              <ClearIcon />
            </IconButton>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton onClick={()=>{
                dispatch(deleteArticle(activeArticle.id,0))
            }}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
        <div className="current__article">
          <h3>{activeArticle.screens[screen].subject}</h3>
          <p>{activeArticle.screens[screen].content}</p>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ActiveArticle;
