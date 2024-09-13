import React from 'react'
import LocationInput from '../weather/LocationInput'
import WeatherDisplay from '../weather/WeatherDisplay'
import Customise from '../weather/Customise'

const Main = () => {
  return (
    <main>
      <h2> 
        What's the weather looking like for the school run
      </h2>
      <LocationInput />
      <WeatherDisplay />
      <Customise />
    </main>
  )
}

export default Main