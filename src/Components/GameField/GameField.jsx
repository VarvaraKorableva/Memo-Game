import React from 'react'
import Card from '../Card/Card'
import './GameField.css';

function GameField({ cards, handleChoice, choiceOne, choiceTwo }) {
  
    return ( 
      <ul className='game-field'>
          {
            cards.map((card) => (
            <Card 
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}/>
          ))}
      </ul>
      );
    }
    
    export default GameField;