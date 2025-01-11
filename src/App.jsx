import { useState } from 'react'
import Header from './assets/components/Header'
import Main from './assets/components/Main'

function App() {
  const [city, setCity] = useState('Butuan')

  console.log("CITY", city)

  return (
    <div className='flex flex-col justify-center py-4 px-4'>
      <Header
        setCity ={setCity}
      />

      <Main 
        city = {city}
      />

    </div>
      
    
  )
}

export default App
