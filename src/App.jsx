import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OemLandingPage from './components/OemLandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <OemLandingPage />
    </>
  )
}

export default App
