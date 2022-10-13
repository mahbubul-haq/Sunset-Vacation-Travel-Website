import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function ExpCards(){
    return(
        <div className='cards'>
            <h1>Discover Sunset Vacation Features </h1>
            <div className='features'>
                <div className='card_wrapper'>
                    <ul className='cards_items'>
                    <div className="e-container">         
                        <h1>Things to do on your Trip</h1>
                        <div className="h-btns">
                             <button className="btns">Experiences</button>
                        </div>
                     </div>
                    </ul>
                    <ul className='cards_items'>
                    <div className="t-container">         
                        <h1>Transport Guildeline</h1>
                        <div className="h-btns">
                             <button className="btns">Guildeline</button>
                        </div>
                     </div>
                    </ul>
                </div>
            </div>
         </div>
       
    )
}
export default ExpCards;