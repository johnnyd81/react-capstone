import React from 'react'

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
