import React, { useState } from 'react'
import Header from './Components/Header'
import MemoryGame from './Components/MemoryGame'
import Restart from './Components/Restart'
import Modal from './Components/Modal'
import './index.css'

function App() {
  //the state of the modal is declared here
  const [showModal, setShowModal] = useState(false)
  //the two functions below control the opening and closing of the modal
  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <div className="App">
      <Header />
      <MemoryGame />
      {showModal && <Modal closeModal={closeModal} />}
      <Restart />
      <button className="modalButton" onClick={openModal}>
        Help
      </button>
    </div>
  )
}

export default App
