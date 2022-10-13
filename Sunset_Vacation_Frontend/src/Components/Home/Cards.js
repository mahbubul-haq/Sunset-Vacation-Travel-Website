import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import FarmHouse from './homePageImages/farmhouse.jpg';
import Cabin from './homePageImages/cabin.jpg';
import Beach from './homePageImages/beach.jpg';
import Apartment from './homePageImages/apartment.jpg';
function Cards(){
    return(
        <div className='cards'>
            <h1>places to explore </h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul classname='cards_items'>
                        <CardItem
                        img= {FarmHouse}
                        text='Enjoy your vacation in a pieceful farmhouse'
                        label='Farm House'                       
                        />
                    </ul>
                    <ul className='cards_item'>
                        <CardItem 
                        img={Beach}
                        text='Enjoy your summer in a beach house'
                        label='beach house'
                        />
                    </ul>
                    <ul className='cards_item'>
                        <CardItem 
                        img={Cabin}
                        text='Right where you want to be'
                        label='Cabin'
                        />
                    </ul>
                    <ul className='cards_item'>
                        <CardItem 
                        img={Apartment}
                        text='Apartments Tailored to Your Standards'
                        label='Apartment'
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}
export default Cards;