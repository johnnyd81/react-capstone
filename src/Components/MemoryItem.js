import React from 'react'
import '../index.css'

const MemoryItem = ({ choice, handleClick, id }) => {
  const choiceClass = choice.phase ? ' active ' + choice.phase : ''
  //the phase variable of each card is dynamically altered when it is clicked. If it is clicked it's phase becomes active which flips the card
  return (
    <div className={'card' + choiceClass} onClick={() => handleClick(id)}>
      <img src={choice.src} alt="a pic" className="card-img" />
    </div>
  )
}

export default MemoryItem
