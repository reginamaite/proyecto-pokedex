import React from "react";
import BigCard from "./Big-card";
import { useParams } from 'react-router-dom'


const CardInformation = (list) =>{
    const id = useParams().id
    console.log(id)
    return(
        <>
            <BigCard/>
     </>
    )
}
export default CardInformation