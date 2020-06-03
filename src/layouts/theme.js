const black = '#000'
const white = '#fff'
const gray = '#bababa'
const green = '#47bb8e'
const blue = '#20c6e3'
const yellow = '#dbcd35'
const orange = '#ee9b37'
const lightPurple = '#840bff'
const purple = '#064bd8'
const darkPurple = '#12367f'
const pink = '#f26cc5'
const red = '#d8362f'

const gradients = {
  green: `linear-gradient(20deg, ${green}, ${blue})`,
  blue: `linear-gradient(20deg, ${blue}, ${green})`,
  yellow: `linear-gradient(20deg, ${yellow}, ${orange})`,
  orange: `linear-gradient(20deg, ${orange}, ${yellow})`,
  purple: `linear-gradient(20deg, ${purple}, ${lightPurple})`,
  darkPurple: `linear-gradient(20deg, ${darkPurple}, ${purple})`,
  pink: `linear-gradient(20deg, ${pink}, ${red})`,
}

const theme = {
  colors: {
    dark: black,
    white,
    gray,
    green,
    blue,
    yellow,
    orange,
    purple,
    darkPurple,
    pink,
    red,
    gradients,
    shadows: {
      yellow: `rgba(219, 205, 53, .5)`,
      orange: `rgba(238, 155, 55, .5)`,
      purple: `rgba(6, 75, 216, .5)`,
      darkPurple: `rgba(18, 54, 127, .5)`,
      green: `rgba(71, 187, 142, .5)`,
    },
    texts: {
      purple: {
        gradient: `linear-gradient(0deg, ${lightPurple} 20%, ${purple} 100%)`,
        color: purple,
      },
      darkPurple: {
        gradient: `linear-gradient(0deg, ${darkPurple} 20, ${purple}100 )`,
        color: darkPurple,
      },
    },
  },
  buttons: {
    green: {
      background: gradients.green,
      color: white,
    },
    whiteGreen: {
      background: white,
      color: gradients.green,
    },
    yellow: {
      background: gradients.yellow,
      color: white,
    },
    whiteYellow: {
      background: white,
      color: gradients.yellow,
    },
    purple: {
      background: gradients.purple,
      color: white,
    },
    darkPurple: {
      background: gradients.darkPurple,
      color: white,
    },
    pink: {
      background: gradients.pink,
      color: white,
    },
    orange: {
      background: gradients.orange,
      color: white,
    },
    whiteOrange: {
      background: white,
      color: gradients.orange,
    },
  },
  transition: 'all 0.3s ease-in-out',
}

export default theme
