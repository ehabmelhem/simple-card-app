import React from 'react'
import Category from './Category/Category';
import {useSelector} from "react-redux"

function MainPage() {
    const [articlsArray,setArticls]=React.useState([]);
   const articles =useSelector((state)=>state.articleState.articles)
    React.useEffect(()=>{
        setArticls(articles)
    },[])
    return (
        <div className="main__page">
            {
                articlsArray.map((element,index)=>(
                        <Category category={element}/>
                ))
            }
        </div>

    )
}

export default MainPage
