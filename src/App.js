import { useEffect, useState } from 'react'
import WeatherCard from './components/WeatherCard'
import styled from 'styled-components'
import WeatherForcast from './components/WeatherForcast'
import SearchBar from './components/SearchBar'
import loadingIcon from './images/loading.svg'
import Axios from 'axios'
import cities from './city.list.json'

function App () {
  const [weather, setWeather] = useState(false)
  const australianCities = cities.filter(city => city.country === 'AU')

  const fetchWeatherData = async api => {
    setWeather(false)
    const { data } = await Axios.get(api)
    setWeather(data)
  }

  useEffect(() => {
    const api = `${process.env.REACT_APP_OPEN_WEATHER_API_URL}onecall?lat=-27.4679&lon=153.0281&exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`
    fetchWeatherData(api)
  }, [])

  const weatherSearch = targetCity => {
    const city = australianCities.find(
      city => city.name.toLowerCase() === targetCity.toLowerCase()
    )
    if (!city) {
      return alert('Please enter a valid city in Australia!')
    }
    const api = `${process.env.REACT_APP_OPEN_WEATHER_API_URL}onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`
    fetchWeatherData(api)
  }
  return (
    <Container>
      <SearchBar weatherSearch={weatherSearch} />
      {weather ? (
        <div>
          <WeatherCard weather={weather} />
          <WeatherForcast weather={weather} />
        </div>
      ) : (
        <Loading />
      )}
    </Container>
  )
}

const Container = styled.div`
  margin: auto;
  width: 960px;
  height: 600px;
  background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
  border-radius: 25px;
  color: #ffffff;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  font-family: Verdana;
`
const Loading = styled.div`
  position: fixed;
  background: url(${loadingIcon}) center center no-repeat;
  width: 960px;
  height: 600px;
`
export default App
