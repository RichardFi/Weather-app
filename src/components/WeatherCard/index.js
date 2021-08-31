import styled from 'styled-components'

const WeatherCard = ({ weather }) => {
  return (
    <Container>
      <City>{weather.timezone.split('/')[1]}</City>
      <Information>
        <WeatherOverall>
          <WeatherIcon
            src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`}
          ></WeatherIcon>
          <Temperature>{weather.current.temp.toFixed()}°</Temperature>
        </WeatherOverall>
        <WeatherDetails>
          <div>
            <div>High</div>
            <div className="data">{weather.daily[0].temp.max}°</div>
          </div>
          <div>
            <div>Low</div>
            <div className="data">{weather.daily[0].temp.min}°</div>
          </div>
          <div>
            <div>Precipitation</div>
            <div className="data">{weather.daily[0].pop * 100}%</div>
          </div>
          <div>
            <div>Humidity</div>
            <div className="data">{weather.daily[0].humidity}%</div>
          </div>
          <div>
            <div>UV</div>
            <div className="data">{weather.daily[0].uvi}</div>
          </div>
          <div>
            <div>Wind</div>
            <div className="data">{weather.daily[0].wind_speed}mph</div>
          </div>
        </WeatherDetails>
      </Information>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 860px;
  margin: auto;
  color: white;
`
const Information = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const WeatherOverall = styled.div`
  display: flex;
  flex-direction: row;
`
const WeatherIcon = styled.img``
const Temperature = styled.h2`
  font-size: 4rem;
`
const WeatherDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.2);
  width: 460px;
  border-radius: 5px;
  color: #000000;
  div {
    flex-basis: 33%;
    text-align: center;
    margin: auto;
    color: white;
    div {
      margin: 10px 0;
      font-size: 0.9rem;
    }
    .data{
        font-size: 1.2rem;
    }
  }
`

const City = styled.h2`
  font-weight: 400;
  font-size: 2.2rem;
  margin-bottom: 0;
`

export default WeatherCard
