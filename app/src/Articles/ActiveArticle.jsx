import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import { changeArticle } from "../redux/Action";
import "./ActiveArticle.css"
function ActiveArticle() {
    const [screen,setScreen]=React.useState(0);
    const activeArticle=useSelector((state)=>state.articleState.activeArticle);
    const dispatch = useDispatch();
    if(activeArticle){
    return (
        <div className="active_article">
            <div className="screens_slider">

                {
                    activeArticle.screens.map((item,index)=>{
                        return (
                            <div className={index<=screen ? "screen screen__active" : "screen"} onClick={()=>{
                                setScreen(index)
                            }}></div>
                        )
                    })
                }
                <div className="leave">
                    <IconButton onClick={()=>{
                        dispatch(changeArticle(null))
                    }}>
                    <ClearIcon/>
                    </IconButton>

                </div>
            </div>
                <div className="current__article">
                <h3>{activeArticle.screens[screen].subject}</h3>
                <p>{activeArticle.screens[screen].content}</p>
                </div>
                

            
        </div>
    )
    }
    else{
        return (
        <div></div>
            )
    }
}

export default ActiveArticle
