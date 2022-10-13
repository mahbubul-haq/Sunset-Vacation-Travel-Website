import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function HostingQues(){
    return(
        <div className='cards'>
            <h1>Sunset Vacation Hosting </h1>
            <div className='features'>
                <div className='card_wrapper'>
                    <ul className='cards_items'>
                    <div className="host-container">         
                        <h1>Questions<br/> About <br/>Hosting?</h1>
                        <div className="hbtns">
                             <button className="btns">Ask a Super Host</button>
                        </div>
                     </div>
                    </ul>
                </div>
            </div>
         </div>
       
    )
}
export default HostingQues;