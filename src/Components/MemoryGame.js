import React, { useState } from 'react'
import MemoryItem from './MemoryItem'
import '../index.css'

const MemoryGame = () => {
  //the card choices are stored in an array in the choices variable
  const [choices, setChoices] = useState(
    [
      { id: 1, src: require('../Images/pic1.jpeg'), phase: '' },
      { id: 1, src: require('../Images/pic1.jpeg'), phase: '' },
      { id: 2, src: require('../Images/pic2.jpeg'), phase: '' },
      { id: 2, src: require('../Images/pic2.jpeg'), phase: '' },
      { id: 3, src: require('../Images/pic3.jpeg'), phase: '' },
      { id: 3, src: require('../Images/pic3.jpeg'), phase: '' },
      { id: 4, src: require('../Images/pic4.jpeg'), phase: '' },
      { id: 4, src: require('../Images/pic4.jpeg'), phase: '' },
      { id: 5, src: require('../Images/pic5.jpeg'), phase: '' },
      { id: 5, src: require('../Images/pic5.jpeg'), phase: '' },
      { id: 6, src: require('../Images/pic6.jpeg'), phase: '' },
      { id: 6, src: require('../Images/pic6.jpeg'), phase: '' },
      { id: 7, src: require('../Images/pic7.jpeg'), phase: '' },
      { id: 7, src: require('../Images/pic7.jpeg'), phase: '' },
      { id: 8, src: require('../Images/pic8.jpeg'), phase: '' },
      { id: 8, src: require('../Images/pic8.jpeg'), phase: '' },
    ].sort(() => Math.random() - 0.5), // the sort method shuffles the array on every restart of the app
  )
  //the state variable below keeps track of the ids that are selected and sets their phase variables accordingly
  const [prev, setPrev] = useState(-1)

  function check(current) {
    //checks to see if the two ids are a match
    if (choices[current].id === choices[prev].id) {
      choices[current].phase = 'correct' //the phase variable is dynamically updated to show the cards are a match
      choices[prev].phase = 'correct'
      setChoices([...choices])
      setPrev(-1)
    } else {
      //in this case the cards are not a match and incorrect and the value is incorrect
      choices[current].phase = 'incorrect'
      choices[prev].phase = 'incorrect'
      setChoices([...choices])
      //a timeout is set to close the cards after a specific time duration and the phase variables are cleared
      setTimeout(() => {
        choices[current].phase = ''
        choices[prev].phase = ''
        setChoices([...choices])
        setPrev(-1)
      }, 650)
    }
  }
  /*the function below checks if a card has been selected already. If a card has been selected it runs the check function above 
to see if the ids are a match*/
  function handleClick(id) {
    if (prev === -1) {
      //if no card was selected setPrev is updated to the selected card's id
      choices[id].phase = 'active'
      setChoices([...choices])
      setPrev(id)
    } else {
      check(id)
    }
  }

  return (
    <div className="container">
      {choices.map((choice, index) => (
        <MemoryItem
          key={index}
          choice={choice}
          handleClick={handleClick}
          id={index}
        />
      ))}
    </div>
  )
}

export default MemoryGame
