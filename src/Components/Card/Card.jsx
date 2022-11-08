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
        src='https://images.unsplash.com/photo-1667596023184-79b24a3e5a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      />

    </div>
    </div>
  );
}
    
export default Card;