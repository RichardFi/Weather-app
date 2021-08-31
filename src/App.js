import { useEffect, useState } from 'react'
import WeatherCard from './components/WeatherCard'
import styled from 'styled-components'
import WeatherForcast from './components/WeatherForcast'
import SearchBar from './components/SearchBar'
import loadingIcon from './images/loading.svg'
function App () {
  const [weather, setWeather] = useState(false)

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_OPEN_WEATHER_API_URL}onecall?lat=-27.4679&lon=153.0281&exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(res => setWeather(res))
  }, [])

  const onClickCity = (lat, lon) => {
    setWeather(false)
    fetch(
      `${process.env.REACT_APP_OPEN_WEATHER_API_URL}onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(res => setWeather(res))
  }
  return (
    <Container>
      <SearchBar onClickCity={onClickCity} />
      {weather ? (
        <div>
          <WeatherCard weather={weather} />
          <WeatherForcast weather={weather} />
        </div>
      ) : (
        <Loading></Loading>
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
