import styled from 'styled-components'
import { useState } from 'react'

const SearchBar = props => {
  const { weatherSearch } = props

  const [city, setCity] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    weatherSearch(city)
  }

  const handleFormOnChangeSearch = e => {
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
          onChange={handleFormOnChangeSearch}
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
    height: 30px;
    border: none;
    :hover {
      opacity: 0.8;
    }
  }
  input {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    color: #ffffff;
    margin-right: 10px;
    height: 30px;
    outline: none;
    border: none;
  }
`
export default SearchBar
