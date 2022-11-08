import React from 'react'
import './App.css'
import GameField from './Components/GameField/GameField'
import { pictures } from './const/const'

function App() {

const [cards, setCards] = React.useState([])

const [choiceOne, setChoiceOne] = React.useState(null)
const [choiceTwo, setChoiceTwo] = React.useState(null)


const shuffleCards = () => {

  const shuffledCards = [...pictures, ...pictures]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card, id: Math.random()}))
  setChoiceOne(null)
  setChoiceTwo(null)
  setCards(shuffledCards)
}

React.useEffect(() => {
  shuffleCards()
},[])

const handleChoice = (card) => {
  choiceOne? setChoiceTwo(card) : setChoiceOne(card)
}

React.useEffect(() => {
  
  if(choiceOne && choiceTwo){

    if(choiceOne.link === choiceTwo.link){
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.link === choiceOne.link) {
            return {...card, matched: true}
          }else{
            return card
          }
        })
      })
      resetTurn()
    } else {
      setTimeout(() => resetTurn(), 500)
    }
  }
}, [choiceOne, choiceTwo])


const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
}

  return (
    <div className="App">
      <h1 className="app__title">Memo Game</h1>
      <button className="app__button" onClick={shuffleCards}>Click here to start again</button>
      <GameField
        cards={cards}
        handleChoice={handleChoice}
        choiceOne={choiceOne}
        choiceTwo={choiceTwo}
      />
    </div>
  );
}

export default App;