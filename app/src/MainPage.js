import React from 'react'
import Category from './Category/Category';
import {articls} from "./Utils/articls";
function MainPage() {
    const [articlsArray,setArticls]=React.useState([]);
    React.useEffect(()=>{
        setArticls(articls)
    },[])
    return (
        <div>
            {
                articls.map((element,index)=>(
                        <Category category={element}/>
                ))
            }
        </div>
    )
}

export default MainPage
