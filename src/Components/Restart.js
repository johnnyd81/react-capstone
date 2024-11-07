import React from 'react'

//the Restart component refreshes the webpage which restarts the game
const Restart = () => {
  return (
    <div>
      <button onClick={() => window.location.reload(false)} className="start">
        Restart Game
      </button>
    </div>
  )
}

export default Restart
