import React, { useState } from 'react'
import TinderCard from "react-tinder-card";
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'steve jobs',
            url: 'https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        },
        {
            name: 'mark zuckerberg',
            url: 'https://api.time.com/wp-content/uploads/2019/04/mark-zuckerberg-time-100-2019.jpg?quality=85&zoom=2'
        }
    ]);

    return (
        <div>
            <h1>Tinder Card</h1>

            <div className="tinderCards__cardContainer">

            {people.map(person => {
                return(
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                        className="card"
                        style={{ backgroundImage:`url(${person.url})` }}
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
                );
            })}
            </div>
        </div>
    );
}

export default TinderCards;
