import { useState } from 'react'
import './App.css'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'

function App() {
  return (
    <>
      <div>
        <FirstComponent/>
        <SecondComponent/>
      </div>
    </>
  )
}

export default App