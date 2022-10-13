import React from "react";
import { CardImg } from "react-bootstrap";
import {Link} from 'react-router-dom';
import './Cards.css';
function CardItem(props){
    return(
        <>
      {/* <div className="cards_item">
           <Link className="cards_item_link">
                <figure className="cards_item_pic_wrap" data-catagory={props.label}>
                    <img scr={props.src} alt="travel image" className="cards_item_img"/>
                </figure>
                <div className="cards_item_info">
                    <h5 className="cards_item_text">
                      {props.text}      
                    </h5>
                </div>
            </Link>
    </div>*/}
    <div className="card_container">
        <div className="image_container">
            <img src={props.img} alt="travel" classname='card_image'/>
        </div>
        <div className="card_title">
      <h1>{props.label}</h1>  
    </div>
    <div className="card_text">
        <p>{props.text}</p>
    </div>
    </div>
    
        </>
    )
}
export default CardItem;
