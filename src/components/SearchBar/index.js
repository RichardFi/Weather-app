import styled from 'styled-components'
import { useState } from 'react'
/* const SearchBar = props => {
  const { onClickCity } = props
  return (
    <Container>
      <button onClick={() => onClickCity('-27.4679', '153.0281')}>
        Brisbane
      </button>
      <button onClick={() => onClickCity('-34.1270', '150.0570')}>
        Sydney
      </button>
      <button onClick={() => onClickCity('-37.9712', '144.4913')}>
        Melbourne
      </button>
    </Container>
  )
} */

const SearchBar = props => {
  const { weatherSearch } = props

  const [city, setCity] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(city)

    weatherSearch(city)
  }
  const handleFormOnChangeUsername = e => {
    setCity(e.target.value)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='city'
          name='city'
          value={city}
          onChange={handleFormOnChangeUsername}
        ></input>

        <button type='submit'>search</button>
      </form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 860px;
  margin: 0 auto;
  margin-top: 30px;
  button {
    margin-right: 10px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 6px 8px;
    color: #ffffff;
    border-radius: 3px;
    border: none;
    :hover {
      opacity: 0.8;
    }
  }
`
export default SearchBar
