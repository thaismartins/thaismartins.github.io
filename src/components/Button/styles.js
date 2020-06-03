import styled from 'styled-components'

const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  ${({ center }) =>
    center &&
    `
    margin-left: auto;
    margin-right: auto;
  `};

  ${({ rounded }) =>
    rounded &&
    `
    border-radius: 2rem;

    a {
      border-radius: 2rem;
    }
  `};

  ${({ circle }) =>
    circle &&
    `
    border-radius: 100%;
    width: 3rem;
    height: 3rem;

    a {
      border-radius: 100%;
      width: 3rem;
      height: 3rem;
    }
  `};

  ${({ theme, color }) =>
    color &&
    `
    background: ${theme.buttons[color].background};
  `};

  a,
  button {
    color: ${({ theme, color }) => theme.colors[color]};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'inherit')};
    border: 1px solid transparent;
    font-weight: 700;
    text-align: center;
    cursor: pointer;

    ${({ circle }) =>
      !circle &&
      `
      width: fit-content;
      max-width: 100%;
      padding: 0.75rem 2.5rem;
    `};

    ${({ theme, color }) =>
      color &&
      `
      display: inline;
      background-color: ${theme.buttons[color].color};
      background-image: ${theme.buttons[color].color};
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent; 
      -moz-text-fill-color: transparent;
    `};

    img {
      width: 50%;
      height: 50%;
      object-fit: contain;
    }

    &:hover {
      ${({ theme, color }) =>
        color &&
        `
        background: ${theme.buttons[color].color};
        color: ${theme.buttons[color].background};
        -webkit-text-fill-color: inherit; 
        -moz-text-fill-color: inherit;
        border-color: ${theme.colors[color]};
      `};
    }
  }
`

export { Container }
