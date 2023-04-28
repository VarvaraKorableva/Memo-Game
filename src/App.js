import React from 'react'
import './App.css'
import GameField from './Components/GameField/GameField'
import { pictures, carsPictures, flowersPictures, animalsPictures, birdsPictures } from './const/const'
import {backgroundPictures} from './const/background'

function App() {

const [cards, setCards] = React.useState([])
const [background, setBackground] = React.useState(backgroundPictures.birdLink)
const [theme, setTheme] = React.useState(false)
const [choiceOne, setChoiceOne] = React.useState(null)
const [choiceTwo, setChoiceTwo] = React.useState(null)

const shuffleCards = () => {
  const shuffledCards = [...flowersPictures, ...flowersPictures]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card, id: Math.random()}))
  setChoiceOne(null)
  setChoiceTwo(null)
  setCards(shuffledCards)
}

React.useEffect(() => {
  shuffleCards()
},[])

function showFlowers() {
  const shuffledCards = [...flowersPictures, ...flowersPictures]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card, id: Math.random()}))
  setChoiceOne(null)
  setChoiceTwo(null)
  setBackground(backgroundPictures.orangeLink)
  setCards(shuffledCards)
}

function showFruts() {
  const shuffledCards = [...pictures, ...pictures]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card, id: Math.random()}))
  setChoiceOne(null)
  setChoiceTwo(null)
  setBackground(backgroundPictures.fruitLink)
  setCards(shuffledCards)
}

function showCars() {
  const shuffledCards = [...carsPictures, ...carsPictures]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card, id: Math.random()}))
  setChoiceOne(null)
  setChoiceTwo(null)
  setBackground(backgroundPictures.carsLink)
  setCards(shuffledCards)
}

function showAnimals() {
  const shuffledCards = [...animalsPictures, ...animalsPictures]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card, id: Math.random()}))
  setChoiceOne(null)
  setChoiceTwo(null)
  setBackground(backgroundPictures.zebraLink)
  setCards(shuffledCards)
}

function showBirds() {
  const shuffledCards = [...birdsPictures, ...birdsPictures]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card, id: Math.random()}))
  setChoiceOne(null)
  setChoiceTwo(null)
  setBackground(backgroundPictures.birdLink)
  setCards(shuffledCards)
}

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
      setTimeout(() => resetTurn(), 1000)
    }
  }
}, [choiceOne, choiceTwo])

const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
}

const changeTheme = () => {
  theme?
  setTheme(false)
  :
  setTheme(true)
}

  return (
    <div className={`app__defoult ${theme? "app__pink-theme": "app__dark-blue-theme"}`}>
      <h1 className="app__title">Memo Game</h1>
      

      <button className="app__change-theme-btn" onClick={changeTheme}>Change Theme</button>
      <div className="app__btn-container">
        <button className="app__change-theme-btn" onClick={showCars}>Cars</button>
        <button className="app__change-theme-btn" onClick={showFruts}>Fruts</button>
        <button className="app__change-theme-btn" onClick={showFlowers}>Flowers</button>
        <button className="app__change-theme-btn" onClick={showAnimals}>Aninals</button>
        <button className="app__change-theme-btn" onClick={showBirds}>Birds</button>
      </div>
      
      <button className="app__button" onClick={shuffleCards}>Click here to start again</button>
      <GameField
        background={background}
        cards={cards}
        handleChoice={handleChoice}
        choiceOne={choiceOne}
        choiceTwo={choiceTwo}
      />
    </div>
  );
}

export default App;