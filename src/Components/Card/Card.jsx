import './Card.css';

function Card({card, handleChoice, flipped}) {

  function handleCardClick(){
    handleChoice(card)
  }
  
  return ( 
    <div className="card">
     <div className={flipped ? 'flipped' : ''}>

      <img className="card__img-face" 
        alt = {card.name} 
        src = {card.link}
      />
      
      <img className='card__img-back' 
        onClick={handleCardClick}
        alt= 'card'
        src='https://media.istockphoto.com/id/1395902516/photo/sky-with-beautiful-clouds-at-sunset.jpg?s=612x612&w=0&k=20&c=HDh-Hm5RqvE-XCcaTKmF9lA1Lj9-6GXnOqReVHFg4JE='
      />

    </div>
    </div>
  );
}
    
export default Card;