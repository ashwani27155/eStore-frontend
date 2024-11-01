import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header.jsx'
import CatNav from './Components/CatNav/CatNav.jsx'
import MainComponent from './Components/MainComponent/MainComponent.jsx'

function App() {

  return (
    <>
<Header/>
<CatNav/>
<MainComponent/>

    </>
  )
}

export default App
