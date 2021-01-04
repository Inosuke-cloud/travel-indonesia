import React from 'react'
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
    return (
        <div className="cards">
            <h1>Check out these MAGICAL Destinations!</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem src="images/image10.jpg"
                        text="2020 is over! It's time for you to explore the wonderful Indonesia and feel new experiences in your life!"
                        label="Nusa Tenggara Timur" path="/services"/>
                        <CardItem src="images/image8.jpg"
                        text="Dare to feel the mystical vibes and experience in this historical architecture?"
                        label="Borobudur" path="/services"/>
                    </ul>
                    <ul className="cards-items">
                        <CardItem src="images/image6.jpg"
                        text="How about relax a little bit and enjoy the views on the Islands of Labuan Bajo?"
                        label="Labuan Bajo" path="/services"/>
                        <CardItem src="images/image11.jpg"
                        text="Learn the historical story of Indonesia"
                        label="Jakarta Museum" path="/services"/>
                        <CardItem src="images/image2.jpg"
                        text="Experience amazing traditional ritual in your life through the Islands of Bali"
                        label="Bali" path="/services"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
