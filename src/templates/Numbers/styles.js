import styled from 'styled-components'
import media from '@layouts/media'

const Container = styled.div`
  width: 100%;
  padding: 8rem 0;

  @media ${media.max.medium} {
    padding: 3rem 0;
  }
`

const Title = styled.h2`
  font-size: 3.75rem;
  font-weight: 700;
  margin-bottom: 4rem;
  text-align: center;
  text-transform: uppercase;

  @media ${media.max.medium} {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`

const NumbersLists = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Number = styled.div`
  padding: 2rem;

  @media ${media.max.medium} {
    flex: 0 1 calc(50% - 1rem);
    padding: 1rem 0;
  }
`

const Hospitals = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Hospital = styled.div`
  flex: 0 1 calc(50% - 1rem);

  @media ${media.max.medium} {
    flex: 1 1 100%;
  }
`

export { Container, Title, NumbersLists, Number, Hospitals, Hospital }
