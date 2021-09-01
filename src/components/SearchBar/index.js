import styled from 'styled-components'

const SearchBar = props => {
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
