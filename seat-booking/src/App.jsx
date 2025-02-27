import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SeatBooking from './Component/SeatBooking'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <SeatBooking/>
     </div>
    </>
  )
}

export default App
