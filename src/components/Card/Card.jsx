import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards/Cards";


const Card = ({hendlecarditem}) => {
const [Carddata,setCarddata]=useState([]);
useEffect(()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setCarddata(data))
},[])


    return (
        <div className="w-3/4">
       <div className="grid grid-cols-1 grid-cols-3 mb-5">
            {
                 Carddata.map((datas,idx)=><Cards key={idx} datas={datas} hendlecarditem={hendlecarditem}></Cards>)
             }
       </div>
        </div>
    );
};
Card.propTypes = {
    hendlecarditem: PropTypes.func
  };
export default Card;