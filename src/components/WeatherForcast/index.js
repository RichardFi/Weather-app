import styled from 'styled-components'

const WeatherForcast = ({ weather }) => {
  console.log(weather)
  return (
    <Container>
      {weather.daily.map((weatherDaily, index) => {
        if (index === 0) {
          return ('')
        }
        return (
          <WeatherCard>
            <DayOfWeek>
              {
                new Date((weatherDaily.dt + weather.timezone_offset) * 1000)
                  .toUTCString()
                  .split(',')[0]
              }
            </DayOfWeek>
            <WeatherIcon
              src={`http://openweathermap.org/img/wn/${weatherDaily.weather[0].icon}.png`}
            ></WeatherIcon>
            <Temperature>{weatherDaily.temp.day.toFixed()}°</Temperature>
          </WeatherCard>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 860px;
  height: 200px;
  align-items: center;
`
const WeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 20px 30px;
  border-radius: 5px;
`
const DayOfWeek = styled.div``
const WeatherIcon = styled.img``
const Temperature = styled.div``

export default WeatherForcast
