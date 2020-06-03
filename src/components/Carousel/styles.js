import styled from 'styled-components'
import { lighten } from 'polished'
import media from '@layouts/media'

const Container = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;

  ${({ arrows }) =>
    arrows &&
    `
    padding: 2rem 5rem;
  `}

  @media ${media.max.medium} {
    padding: 1rem 0;
  }

  .slick-track {
    height: 100%;
    overflow: hidden;
    display: flex;
  }

  .slick-list {
    padding: 0;
    height: auto;
    overflow: hidden;
  }

  .slick-slide {
    display: inline-flex;
    height: auto;
    overflow: hidden;
    align-items: stretch;
    position: relative;

    > div {
      width: 100%;
      padding: 1rem;
    }

    &.slick-active {
      z-index: 2;
    }
  }

  .slick-arrow {
    z-index: 3;
  }

  .slick-dots {
    min-height: 1.5rem;
    text-align: center;
    z-index: 3;
    margin-top: 2rem;

    li {
      width: 0.5rem;
      height: 0.5rem;
      display: inline-block;
      margin: 0.45rem;
      cursor: pointer;
      position: relative;

      &.slick-active {
        button {
          &::before {
            background-color: ${({ theme, color }) => theme.colors[color]};
          }
        }
      }

      button {
        width: 0.65rem;
        height: 0.65rem;
        font-size: 0;
        position: relative;
        border: none;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;

        &::before {
          line-height: 0.75rem;
          width: 0.65rem;
          height: 0.65rem;
          background-color: ${({ theme, color }) =>
            lighten(0.3, theme.colors[color])};
          opacity: 1;
          position: absolute;
          top: 0;
          left: 0;
          content: '•';
        }
      }
    }
  }
`

export { Container }
