import './Card.css';

function Card({card, handleChoice, flipped, background}) {

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
        src={background}
      />

    </div>
    </div>
  );
}
    
export default Card;