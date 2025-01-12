import { useState } from 'react'
import Header from './assets/components/Header'
import Main from './assets/components/Main'

function App() {
  const [city, setCity] = useState('Butuan')
  const [country, setCountry] = useState('Philippines')
  const [cityHeader, setCityHeader] = useState('Butuan')

  return (
    <div className='flex flex-col justify-center py-4 px-4'>
      <Header
        setCity ={setCity}
        city={city}
        country = {country}
        cityHeader={cityHeader}
      />

      <Main 
        city = {city}
        setCountry = {setCountry}
        setCityHeader = {setCityHeader}
      />

    </div>
      
    
  )
}

export default App
